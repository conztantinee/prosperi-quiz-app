const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-subscription", async (req, res) => {
  const { email, paymentMethod } = req.body;

  try {
    const customer = await stripe.customers.create({
      email,
      payment_method: paymentMethod,
      invoice_settings: {
        default_payment_method: paymentMethod,
      },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: process.env.PRODUCT_ID,
        },
      ],
      payment_settings: {
        payment_method_types: ["card"],
        save_default_payment_method: "on_subscription",
      },
      expand: ["latest_invoice.payment_intent"],
    });

    const status = subscription["latest_invoice"]["payment_intent"]["status"];
    const client_secret =
      subscription["latest_invoice"]["payment_intent"]["client_secret"];

    console.log("Status: ", status);
    res.status(201).json({
      subscription,
      subscriptionStatus: status,
      clientSecret: client_secret,
    });
  } catch (error) {
    console.error(error);

    if (error.type === "StripeCardError") {
      return res.status(400).json({ message: "Your card was declined" });
    }

    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;

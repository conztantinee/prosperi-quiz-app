import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import classes from "./StripeForm.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const forceReflow = (selector) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    if (el) {
      const initialDisplay = el.style.display;

      el.style.display = "none";
      el.style.display = initialDisplay;
    }
  });
};
export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const email = useSelector((state) => state.questions.email);

  useEffect(() => {
    if (stripe && elements) {
      forceReflow(".StripeElement");
    }
  }, [stripe, elements]);

  // Force the Element frame to paint once it is visible on the page

  const navigate = useNavigate();

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const handlePayment = async () => {
      try {
        const stripeResult = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement("card"),
        });

        if (stripeResult.error) {
          throw new Error(stripeResult.error.message);
        }

        const resp = await fetch(
          // "https://quiz-app-1.herokuapp.com/api/payment/stripe/create-subscription",
          "https://prosperi.university/api/payment/stripe/create-subscription",
          // "http://localhost:5000/api/payment/stripe/create-subscription",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentMethod: stripeResult.paymentMethod.id,
              email,
            }),
          }
        );

        const data = await resp.json();

        if (resp.status === 201) {
          console.log(data);
          if (data.subscriptionStatus === "requires_action") {
            const confirm = await stripe.confirmCardPayment(data.clientSecret);

            if (confirm.error) {
              throw new Error(confirm.error.message);
            }

            console.log(confirm);
          }

          setError(null);
          setProcessing(false);
          setSucceeded(true);

          setTimeout(() => {
            navigate("/thanks");
          }, 3000);
        } else {
          throw new Error(data.message.toLowerCase());
        }
      } catch (error) {
        setError(`Payment failed: ${error.message}`);
        setProcessing(false);
        console.error(error);
      }
    };

    handlePayment();
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
        className={classes["pay-button"]}
      >
        <span id="button-text">
          {processing ? (
            <div className={classes.spinner} id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className={classes.card_error} role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p
        className={
          succeeded
            ? classes["result-message"]
            : `${classes["result-message"]} ${classes.hidden}`
        }
      >
        Payment succeeded
      </p>
    </form>
  );
}

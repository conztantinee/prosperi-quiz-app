import Stripe from "stripe";

const stripe=new Stripe(process.env.STRIPE_KEY);
const productId = process.env.PRODUCT_ID;

export default async function handler(req, res){
    try{
        if(req.method!="POST"){
            res.status(400);
        }
        const {email, paymentMethod} =req.body;

        const customer= await stripe.customers.create({
            email, 
            payment_method: paymentMethod, 
            invoice_settings: {default_payment_method: paymentMethod},
        })

        const product = await stripe.products.retrieve(productId);
        const subscription= await stripe.subscriptions.create({
            customer: customer.id,
            items: [
                {
                    price_data: {
                        currency: 'USD',
                        product: productId,
                        unit_amount: "3900",
                        recurring: {
                            interval: "week"
                        }
                    }
                }
            ],
            payment_settings: {
                payment_method_type: ['card'],
                save_default_payment_method: 'on_subscription',
            },
            expand: ['latest_invoice.payment_intent']
        });
        res.json({
            message: 'Subscription successful',
            clientSecret: subscription.latest_invoice.payment_intent.client_secret,
            subscriptionId: subscription.id,
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
}
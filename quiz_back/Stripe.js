const router=require("express").Router();
const stripe=require("stripe")(process.env.STRIPE_KEY);

app.get('/product', async (req, res) => {
    const productId = process.env.PRODUCT_ID;
  
    try {
      const product = await stripe.products.retrieve(productId);
      res.send(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({
        error: {
          message: 'Could not retrieve product',
        },
      });
    }
  });

module.exports=router;
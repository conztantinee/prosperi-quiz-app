const express = require("express");
const stripeRouter = require("./stripe");

const router = express.Router();

router.use("/stripe", stripeRouter);

module.exports = router;

require("dotenv").config();
const express = require("express");
const recurly = require("recurly");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const paymentRouter = require("./routes/payment");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/api/payment", paymentRouter);

app.get("/*", express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")(
  "sk_test_51LuFiWARb0t1Hj3Vj937ej9bnbFZJ9MkYpmanbZWRZ8RkneOAotQ0XCCq3sFS3Nw8TNg16UB3h9uuuNV431SKCuU00bPp2jtaG"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
response.redirect(path.join(__dirname, '../public/user_home.html'),safe=true)

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/challenge-e200f/us-central1/api

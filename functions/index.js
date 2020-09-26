const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HVEJCLTUo6UkKpKapAgYVR0pWsLvYIIEP36YBL6m76gGkSQvRa0HkNnHx1uyGQprDt8ndW1Yzdgbg8IgxHSsqH300jgH4y7vs"
);

//api

//app config

const app = express();

//middlewere

app.use(cors({ origin: true }));
app.use(express.json());

//api routes

app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received ", total);

  const paymentIntents = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntents.client_secret,
  });
});

//listen command

exports.api = functions.https.onRequest(app);

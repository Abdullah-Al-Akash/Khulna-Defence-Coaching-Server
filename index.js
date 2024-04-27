const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();
// Middleware:
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Khulna Defence Coaching Server is Running!");
});
// MongoDB Connection Setup:
const uri = `mongodb+srv://HelloKDC:${process.env.DB_PASS}@khulna-defense-coaching.ipkf1ca.mongodb.net/?retryWrites=true&w=majority&appName=khulna-defense-coaching`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Connected Successfully!");

    // Create Database and Collection:

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, (req, res) => {
  console.log(`Khulna Defense Coaching running on: ${port}`);
});

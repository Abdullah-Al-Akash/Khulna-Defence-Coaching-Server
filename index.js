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
    const usersCollection = client.db("KDCDatabase").collection("users");
    const ansSheetCollection = client
      .db("KDCDatabase")
      .collection("ansSheetCollection");
    const package1 = client.db("KDCDatabase").collection("package-1");
    const package2 = client.db("KDCDatabase").collection("package-2");
    const package3 = client.db("KDCDatabase").collection("package-3");
    const package4 = client.db("KDCDatabase").collection("package-4");
    const package5 = client.db("KDCDatabase").collection("package-5");
    const package6 = client.db("KDCDatabase").collection("package-6");
    const package7 = client.db("KDCDatabase").collection("package-7");
    const package8 = client.db("KDCDatabase").collection("package-8");
    const package9 = client.db("KDCDatabase").collection("package-9");
    const package10 = client.db("KDCDatabase").collection("package-10");
    const package11 = client.db("KDCDatabase").collection("package-11");
    const package12 = client.db("KDCDatabase").collection("package-12");
    const package13 = client.db("KDCDatabase").collection("package-13");
    const package14 = client.db("KDCDatabase").collection("package-14");
    const package15 = client.db("KDCDatabase").collection("package-15");

    app.post("/registration", async (req, res) => {
      const userInformation = req.body;
      const result = await usersCollection.insertOne(userInformation);
      res.send(result);
    });

    //Load Package:
    app.get("/package", async (req, res) => {
      const query = req.query.id;
      // console.log(query);
      let selectedCollection;

      if (query == 1) {
        selectedCollection = package1;
      } else if (query == 2) {
        selectedCollection = package2;
      } else if (query == 3) {
        selectedCollection = package3;
      } else if (query == 4) {
        selectedCollection = package4;
      } else if (query == 5) {
        selectedCollection = package5;
      } else if (query == 6) {
        selectedCollection = package6;
      } else if (query == 7) {
        selectedCollection = package7;
      } else if (query == 8) {
        selectedCollection = package8;
      } else if (query == 9) {
        selectedCollection = package9;
      } else if (query == 10) {
        selectedCollection = package10;
      } else if (query == 11) {
        selectedCollection = package11;
      } else if (query == 12) {
        selectedCollection = package12;
      } else if (query == 13) {
        selectedCollection = package13;
      } else if (query == 14) {
        selectedCollection = package14;
      } else if (query == 15) {
        selectedCollection = package15;
      } else {
        return res.status(400).json({ error: "Invalid package id" });
      }

      try {
        const cursor = await selectedCollection.find({});
        const result = await cursor.toArray();

        res.json(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // Post Question
    app.post("/package", async (req, res) => {
      const query = req.query.id;
      console.log(query);
      const question = req.body;

      let selectedCollection;

      if (query == 1) {
        selectedCollection = package1;
      } else if (query == 2) {
        selectedCollection = package2;
      } else if (query == 3) {
        selectedCollection = package3;
      } else if (query == 4) {
        selectedCollection = package4;
      } else if (query == 5) {
        selectedCollection = package5;
      } else if (query == 6) {
        selectedCollection = package6;
      } else if (query == 7) {
        selectedCollection = package7;
      } else if (query == 8) {
        selectedCollection = package8;
      } else if (query == 9) {
        selectedCollection = package9;
      } else if (query == 10) {
        selectedCollection = package10;
      } else if (query == 11) {
        selectedCollection = package11;
      } else if (query == 12) {
        selectedCollection = package12;
      } else if (query == 13) {
        selectedCollection = package13;
      } else if (query == 14) {
        selectedCollection = package14;
      } else if (query == 15) {
        selectedCollection = package15;
      } else {
        return res.status(400).json({ error: "Invalid package id" });
      }
      try {
        const result = await selectedCollection.insertOne(question);
        res.send(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // Update Quiz:
    app.put("/updateQuiz", async (req, res) => {
      const query = req.query.quizId;
      const id = req.query._id;
      const updatedQuiz = req.body;
      console.log(updatedQuiz);

      let selectedCollection;

      if (query == 1) {
        selectedCollection = package1;
      } else if (query == 2) {
        selectedCollection = package2;
      } else if (query == 3) {
        selectedCollection = package3;
      } else if (query == 4) {
        selectedCollection = package4;
      } else if (query == 5) {
        selectedCollection = package5;
      } else if (query == 6) {
        selectedCollection = package6;
      } else if (query == 7) {
        selectedCollection = package7;
      } else if (query == 8) {
        selectedCollection = package8;
      } else if (query == 9) {
        selectedCollection = package9;
      } else if (query == 10) {
        selectedCollection = package10;
      } else if (query == 11) {
        selectedCollection = package11;
      } else if (query == 12) {
        selectedCollection = package12;
      } else if (query == 13) {
        selectedCollection = package13;
      } else if (query == 14) {
        selectedCollection = package14;
      } else if (query == 15) {
        selectedCollection = package15;
      } else {
        return res.status(400).json({ error: "Invalid package id" });
      }

      try {
        const filter = { _id: new ObjectId(id) }; // Define filter using _id
        const options = { upsert: true };
        const updateQuiz = {
          $set: {
            question: updatedQuiz?.question,
            options: {
              option1: updatedQuiz?.options.option1,
              option2: updatedQuiz?.options.option2,
              option3: updatedQuiz?.options.option3,
              option4: updatedQuiz?.options.option4,
              option5: updatedQuiz?.options.option5,
            },
            correctOption: updatedQuiz?.correctOption,
            explanation: updatedQuiz?.explanation,
          },
        };

        const result = await selectedCollection.updateOne(
          filter,
          updateQuiz,
          options
        );
        res.send(result);
      } catch (error) {
        console.error("Error updating quiz:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // Load All Users:
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Submitted Ans:
    app.post("/submit-ans", async (req, res) => {
      const submittedAns = req.body;
      const result = await ansSheetCollection.insertOne(submittedAns);
      res.send(result);
    });

    app.get("/submit-ans", async (req, res) => {
      const query = req.query.email;
      console.log(query);
      if (query == "all") {
        const cursor = ansSheetCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      } else {
        const cursor = ansSheetCollection.find({ email: query });
        const result = await cursor.toArray();
        res.send(result);
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, (req, res) => {
  console.log(`Khulna Defense Coaching running on: ${port}`);
});

const express = require("express");
const app = express();
const port = 7373;

const mongoose = require("mongoose");

const joke = [
  {
    id: 1,
    setup: "this is good joke",
    punchline: "im a mern stack developer",
  },
  {
    id: 2,
    setup: "salman",
    punchline: "im a mern stack developer",
  },
  {
    id: 2,
    setup: "salman",
    punchline: "im a mern stack developer",
  },
];

app.get("/data", (req, res) => {
  res.send("Hello this is express js server sample");
});

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/joke", (req, res) => {
  res.json(joke);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// mongodb integration//

mongoose
  .connect(
    "mongodb+srv://######.######.###@cluster0.j4bcbgb.mongodb.net/?appName=Cluster0",
  )
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => console.error("Could not Connent to Mongodb", err));


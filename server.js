const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
app.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://uzair:uzair23@lab-final.ouoqz.mongodb.net/Lab-Final?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true });
const db1 = mongoose.connection;
db1.once("open", (_) => {
  console.log("Database connected:", uri);
});

db1.on("error", (err) => {
  console.error("connection error:", err);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "home.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "admin.html");
});
app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});
app.post("/api", (req, res) => {
  db.collection("Matches").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
const port = 4000;

app.listen(port, () => console.log(`This app is listening on port ${port}`));

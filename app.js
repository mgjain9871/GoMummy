const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();
const API_KEY='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';
const coll = require("./config");
const nodemailer = require("nodemailer");

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
// import {
//   getFirestore,
//   collection,
//   getDocs,
// } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyAW21-NN4X9GuM3E8ASwTv0nmHHDybzQNg",
//   authDomain: "gomummy-b2301.firebaseapp.com",
//   projectId: "gomummy-b2301",
//   storageBucket: "gomummy-b2301.appspot.com",
//   messagingSenderId: "241727400177",
//   appId: "1:241727400177:web:920bea3b8d937014c0a150",
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/index", function (req, res) {
  res.render("index");
});
app.get("/contactus", function (req, res) {
  res.render("contactus");
});
app.get("/add", function (req, res) {
  res.render("add");
});
app.get("/find", async function (req, res) {
  res.render("find");
});
app.get("/details/:id", async function (req, res) {
  const id = req.params.id;
  let data = [];
  await coll
    .doc(id)
    .get()
    .then((doc) => {
      data.push(doc.data());
      res.render("knowmore", {

        data: doc.data(),

      });
    });
    //console.log(data);

});
app.get("/aboutus", function (req, res) {
  res.render("aboutus");
});
app.get("/signup", function (req, res) {
  res.render("signup");
});
app.get("/login", function (req, res) {
  res.render("login");
});
app.post("/getmail",function(req,res){
  const take=req.body.topic;
  console.log(take);
  res.render('index');
});
//
app.listen(5000, function () {
  console.log("Server started on port 3000");
});

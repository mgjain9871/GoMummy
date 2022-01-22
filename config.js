const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAW21-NN4X9GuM3E8ASwTv0nmHHDybzQNg",
  authDomain: "gomummy-b2301.firebaseapp.com",
  projectId: "gomummy-b2301",
  storageBucket: "gomummy-b2301.appspot.com",
  messagingSenderId: "241727400177",
  appId: "1:241727400177:web:920bea3b8d937014c0a150",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const coll = db.collection("businesses");
module.exports = coll;

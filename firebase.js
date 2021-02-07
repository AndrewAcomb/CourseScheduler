import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC4I0GxiGonDunLgj1-pVYaf8S810Qlr7U",
  authDomain: "coursescheduler-f5b25.firebaseapp.com",
  databaseURL: "https://coursescheduler-f5b25-default-rtdb.firebaseio.com",
  projectId: "coursescheduler-f5b25",
  storageBucket: "coursescheduler-f5b25.appspot.com",
  messagingSenderId: "423269905927",
  appId: "1:423269905927:web:1e25047c01654319e99ca2",
  measurementId: "G-S4CCB66TCE",
};

firebase.initializeApp(firebaseConfig);

export { firebase };

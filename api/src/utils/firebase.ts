import firebase from "firebase/compat/app";
import 'firebase/database';
import { getDatabase } from "firebase/database";
const configs = require("./index.json");

const firebaseConfig = {
  apiKey: configs.firebase.apiKey,
  authDomain: configs.firebase.authDomain,
  databaseURL: configs.firebase.databaseURL,
  projectId: configs.firebase.projectId,
  storageBucket: configs.firebase.storageBucket,
  messagingSenderId: configs.firebase.messagingSenderId,
  appId: configs.firebase.appId,
  measurementId: configs.firebase.measurementId
};

// if (!firebase.apps.length) {
// }
const app = firebase.initializeApp(firebaseConfig);
console.log('ket noi thanh cong');
const database = getDatabase(app);

export default database;
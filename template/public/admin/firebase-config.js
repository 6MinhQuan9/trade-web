// firebase-config.js
import firebase from './firebase/app';
// import './firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDsB5GfBRUDc-Jymm45O8mFggf6EGEZooo",
  authDomain: "bigdeal-e7cdc.firebaseapp.com",
  databaseURL: "bigdeal-e7cdc",
  projectId: "bigdeal-e7cdc.appspot.com",
  storageBucket: "683233748928",
  messagingSenderId: "1:683233748928:web:229bf6b44ee053bd004a25",
  appId: "G-EGKRNXP8RW"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);

// Export Firestore để sử dụng trong các tệp JavaScript khác
export const firestore = firebase.firestore();
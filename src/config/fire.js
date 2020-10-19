import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBuHAiYkJI0iKYLUlY0y8pM5ClQapNv8eg",
  authDomain: "mobile-store-bcba7.firebaseapp.com",
  databaseURL: "https://mobile-store-bcba7.firebaseio.com",
  projectId: "mobile-store-bcba7",
  storageBucket: "mobile-store-bcba7.appspot.com",
  messagingSenderId: "404487634481",
  appId: "1:404487634481:web:e81f5882d972679fcb9f10",
  measurementId: "G-CPQV69ESJ6"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "mobile-store-bcba7.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "mobile-store-bcba7",
    storageBucket: "mobile-store-bcba7.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

const fire = firebase.initializeApp(firebaseConfig)

export default fire;

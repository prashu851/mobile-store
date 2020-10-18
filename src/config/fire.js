import firebase from 'firebase'

console.log('measurement id', process.env.MEASUREMENT_ID);
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "mobile-store-bcba7.firebaseapp.com",
    databaseURL: process.env.DATABASE_URL,
    projectId: "mobile-store-bcba7",
    storageBucket: "mobile-store-bcba7.appspot.com",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

const fire = firebase.initializeApp(firebaseConfig)

export default fire;
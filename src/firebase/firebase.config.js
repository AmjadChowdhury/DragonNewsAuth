// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSitwVGpoQmqj796ZJTiuhG2DMBKfk2u0",
  authDomain: "dragonnewsauth-4d146.firebaseapp.com",
  projectId: "dragonnewsauth-4d146",
  storageBucket: "dragonnewsauth-4d146.appspot.com",
  messagingSenderId: "135693580375",
  appId: "1:135693580375:web:72683670709c1151c88b12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 export default auth

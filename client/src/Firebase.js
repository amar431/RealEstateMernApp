// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernrealestatewebsite.firebaseapp.com",
  projectId: "mernrealestatewebsite",
  storageBucket: "mernrealestatewebsite.appspot.com",
  messagingSenderId: "19842775621",
  appId: "1:19842775621:web:91fcd64c277f1260ee012c"
};
console.log(firebaseConfig)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
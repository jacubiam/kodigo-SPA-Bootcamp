import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDAhbVgnaKnBI4SyN8Y1dI114BKJ6IbQVw",
  authDomain: "kodigo-spa-bootcamp.firebaseapp.com",
  projectId: "kodigo-spa-bootcamp",
  storageBucket: "kodigo-spa-bootcamp.appspot.com",
  messagingSenderId: "435195972549",
  appId: "1:435195972549:web:1ddc1b7862b1f1050c99ac"
}

export const app = initializeApp(firebaseConfig)
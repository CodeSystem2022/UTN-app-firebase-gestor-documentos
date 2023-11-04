import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBpw65qIG-7rgqlLTQfqM8iSAOZkYwEq9c",
  authDomain: "fir-reac1.firebaseapp.com",
  projectId: "fir-reac1",
  storageBucket: "fir-reac1.appspot.com",
  messagingSenderId: "307847387312",
  appId: "1:307847387312:web:b80c855bec4324ca5d8375"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // getAuth nos permite obtener el servicio de autenticación de Firebase (mediante el método getAuth)

export { auth };
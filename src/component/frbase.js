// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDbYu0gGv_dV35j0WCkyMJdpRtDzRIrFmo",
  authDomain: "my-friends-app-0.firebaseapp.com",
  projectId: "my-friends-app-0",
  storageBucket: "my-friends-app-0.appspot.com",
  messagingSenderId: "121872766021",
  appId: "1:121872766021:web:cec56d02361fe43ed8bf2c",
  measurementId: "G-EB1VGNH8KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
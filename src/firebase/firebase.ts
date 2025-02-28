import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFPYaF2b7DQv-iU0XnjIBLVMg5tn_evl8",
    authDomain: "todotest-6ee9d.firebaseapp.com",
    projectId: "todotest-6ee9d",
    storageBucket: "todotest-6ee9d.firebasestorage.app",
    messagingSenderId: "566350665902",
    appId: "1:566350665902:web:ae0739ed9bd78ce289353f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
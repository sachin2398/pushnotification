// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging ,getToken} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfBVbZUZr2v_OhS2ByFWSHBvl5hZfMS88",
  authDomain: "pushnotification-65167.firebaseapp.com",
  projectId: "pushnotification-65167",
  storageBucket: "pushnotification-65167.appspot.com",
  messagingSenderId: "763187989347",
  appId: "1:763187989347:web:51fbc7623a089aa077a156",
  measurementId: "G-FNJ1EWQX23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const generateToken= async () => {
    const permission= await Notification.requestPermission();
  
    console.log(permission);
    if(permission === "granted"){
        const token= await getToken (messaging,{
            vapidKey:"BEIBqxiMPpqTD9_FgEXOzlIeDGnak4rhnpxN7vwFoffZYw0oDcu7xyiUzFqYjVB5Xo8qxBJSr2QAEKJfB8YeFgE"
        })
        console.log(token);
    }
    
    
}

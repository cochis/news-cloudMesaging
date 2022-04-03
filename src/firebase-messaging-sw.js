import { initializeApp } from 'firebase/app';
import { getMessaging } from "firebase/messaging/sw";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCNM8MezVsjddDKQ0sZpR6eCzjNoNQcAmY",
    authDomain: "noticias-oarrs.firebaseapp.com",
    projectId: "noticias-oarrs",
    storageBucket: "noticias-oarrs.appspot.com",
    messagingSenderId: "119846485990",
    appId: "1:119846485990:web:d296fa9496820dc7f92027",
    measurementId: "G-71WB1JCN8K"
});
const messaging = getMessaging(firebaseApp);


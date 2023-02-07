importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDtqVZ_76utabPH4xbcchlau5j3lYbbK0I",
  appId: "1:1086155748927:android:204988a657a81452f5ea8a",
  messagingSenderId: "1086155748927",
  projectId: "aplicacion-mensajeria",
  authDomain: "aplicacion-mensajeria.firebaseapp.com",
  databaseURL: "...",
  //databaseURL:'https://flutterfire-e2e-tests-default-rtdb.europe-west1.firebasedatabase.app',
  storageBucket: "aplicacion-mensajeria.appspot.com",
  //measurementId: 'G-JN95N1JV2E',
});
console.log("firebase.initializeApp...");
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
// messaging.onBackgroundMessage((m) => {
//   console.log("onBackgroundMessage", m);
// });

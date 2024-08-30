import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCVT4fpH3Gr7eGd9D6gTORvytpnorRfnEM",
    authDomain: "e-grampanchayat-2d2cf.firebaseapp.com",
    projectId: "e-grampanchayat-2d2cf",
    storageBucket: "e-grampanchayat-2d2cf.appspot.com",
    messagingSenderId: "357290238442",
    appId: "1:357290238442:web:cd4960efd9ff31cadd5293"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;

  
  /* Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();  
*/
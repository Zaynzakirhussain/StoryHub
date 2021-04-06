import * as firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCaFJ-kDf7KTTXuY486cfakq1Nijp2ppRk",
    authDomain: "storyhub-eff5b.firebaseapp.com",
    projectId: "storyhub-eff5b",
    storageBucket: "storyhub-eff5b.appspot.com",
    messagingSenderId: "615805836157",
    appId: "1:615805836157:web:57874a9fce44dad0b88a14"
};

// Initialize Firebase
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); } 
export default firebase.firestore();
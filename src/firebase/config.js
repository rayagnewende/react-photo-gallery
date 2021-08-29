import firebase from 'firebase/compat/app'; 
import 'firebase/compat/storage' ; 
import  'firebase/compat/firestore' ; 




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwiFS2QRXVn1wg7nIFYYZfvCEK0XQU_ZE",
  authDomain: "react-photo-gallery-afde9.firebaseapp.com",
  projectId: "react-photo-gallery-afde9",
  storageBucket: "react-photo-gallery-afde9.appspot.com",
  messagingSenderId: "328829712930",
  appId: "1:328829712930:web:665f38fcf39e45ac4aa87b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage(); 
const projectFirestore = firebase.firestore(); 

export { projectFirestore, projectStorage} ;
export default firebase ; 
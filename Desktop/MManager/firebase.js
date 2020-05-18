import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAerOnE20XKiVgMpT5zXuu5lrBTw3yQmhw",
    authDomain: "mmanager-7a5e4.firebaseapp.com",
    databaseURL: "https://mmanager-7a5e4.firebaseio.com",
    projectId: "mmanager-7a5e4",
    storageBucket: "mmanager-7a5e4.appspot.com",
    messagingSenderId: "790034353511",
    appId: "1:790034353511:web:96a97e6908f4804ac173c2",
    measurementId: "G-LX9RG7R75T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
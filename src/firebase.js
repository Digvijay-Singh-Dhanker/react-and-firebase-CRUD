  import * as firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyB-898B0WtFTaOWX8whSGpmkipI-o3RVWg",
    authDomain: "react-crud-1380d.firebaseapp.com",
    databaseURL: "https://react-crud-1380d-default-rtdb.firebaseio.com",
    projectId: "react-crud-1380d",
    storageBucket: "react-crud-1380d.appspot.com",
    messagingSenderId: "126034860023",
    appId: "1:126034860023:web:4b71c2a8826ae02ce3c0f2",
    measurementId: "G-LS0X5JF74X"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  

  export default fireDb.database().ref();
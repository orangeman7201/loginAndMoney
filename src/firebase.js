import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

const config = {
    apiKey: "AIzaSyC2CKsGvPzZJ75CuT7PQwVn1mbN9jhb0kw",
    authDomain: "vueloginandmoney.firebaseapp.com",
    projectId: "vueloginandmoney",
    storageBucket: "vueloginandmoney.appspot.com",
    messagingSenderId: "603380079267",
    appId: "1:603380079267:web:55167398e56fd4e43c3d16"
  };

  export default {
    init() {
       firebase.initializeApp(config);
        // firebas.firestore();
    }
  }
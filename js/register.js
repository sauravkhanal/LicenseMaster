import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"
import { validateEmail,showPopup,closePopup } from "./modules.js";
closePopup();

const firebaseConfig = {
    apiKey: "AIzaSyB5WHScYZt7yHCv3LDk8TuI9BkQgDvO0iM",
    authDomain: "nepalengineeringmcq.firebaseapp.com",
    databaseURL: "https://nepalengineeringmcq-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nepalengineeringmcq",
    storageBucket: "nepalengineeringmcq.appspot.com",
    messagingSenderId: "1017211904451",
    appId: "1:1017211904451:web:2e27dcc708ed7acd745d76",
    measurementId: "G-55KZ0NVFHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

$("#register").click(function(e)  {

  e.preventDefault()
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email == "")  {
    showPopup("Please Enter your Email")
  }
  else if (validateEmail(email) == false) {
    showPopup("Invalid Email format !!")
  }
  else if(password.length < 6)  {
    showPopup('Password must be greater than 6 characters')
  }
  else {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      showPopup('Account has been created successfully <br> You will be redirected to login page.');
      setTimeout(function goToLogin() {window.open('login.html',"_self")}, 5000);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      if (errorCode == "auth/email-already-in-use")
        showPopup ("Account already exists !! <br> Please recover your password if you've forgot.");
      else
        showPopup(`Oops error occured.<br> ${errorCode} ${errorMessage}`);
    });        
  }
})

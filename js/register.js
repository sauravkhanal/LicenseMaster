import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"

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


function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the regex pattern
  if (!emailRegex.test(email)) {
    return false;
}

  return true; // No error
}

const popup = document.getElementById("popup")

function showPopup(text)  {
  $("#popup-text").html(text);
  popup.showModal()
  // $("#popup").showModal(); 
  // doesn't work with jquery

}

$("#popup-exit-btn").click( ()=>  {
  popup.close()
  // $("#popup").hide();
})

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
      showPopup('Account has been created successfully');
      window.open('login.html',"_self");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
<<<<<<< HEAD
      
      if (errorCode == "auth/email-already-in-use")
        showPopup ("Account already exists !! <br> Please recover your password if you've forgot.");
      else
        showPopup(`Oops error occured.<br> ${errorCode} ${errorMessage}`)
    });        
  }
})


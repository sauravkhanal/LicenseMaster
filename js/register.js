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
    return 'Invalid email address.';
  }

  return null; // No error
}

$("#register").click(function(e)  {
    // alert(' btn clicked ');const auth = getAuth();
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

  if (email ==''){
    alert('Email cannot be empty')
  }
  else if (validateEmail(email))  {
    alert('invalid email')
  }
  else if(password == '') {
    alert('password cannot be empty')
  }
  else if(password.length < 6)  {
    alert('password must be greater than 6 characters')
  }
  else {
    alert('inside')
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Account has been created successfully');
      window.open('login.html',"_self");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Oops error occured.\n ${errorCode} ${errorMessage}`)
    });        
  }
})


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"

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

const app = initializeApp(firebaseConfig);
const auth = getAuth();


// sign in existing user with email and password

document.getElementById("login_btn").addEventListener("click",function(e)  {
  e.preventDefault();
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
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
  // Signed in 
  window.open("loggedin.html","_self");

  })
  .catch((error) => {
    const errorCode = error.code;
    // const popup = document.getElementById('popup');
    // document.getElementById('popup-text').innerHTML = `${generateErrorMessage(errorCode)} `
    // popup.showModal();
    showPopup(generateErrorMessage(errorCode))
  });
}


});

document.getElementById('login_google').addEventListener('click', function (e)  {
    // e.preventDefault;
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then(() => {
    window.open('loggedin.html','_self')

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    showPopup(`Oops! Error occured\n ${errorCode} : ${errorMessage} \n email ${email}`);
  });
});

// //close modal
// document.querySelector('#popup-exit-btn').addEventListener('click', () => {
//   document.querySelector('#popup').close();
// })

const popup = document.getElementById("popup") //dialog doesn't work with jquery

$("#popup-exit-btn").click(()=>  {
  popup.close()
})

function showPopup(text)  {
  $("#popup-text").html(text);
  popup.showModal()
}

function generateErrorMessage (errorCode)  {
  switch(errorCode)  {
    case 'auth/network-request-failed':
      return "<h3>Network error</h3><br>Please check your internet connection."

    case 'auth/user-not-found' :
      return "User Doesn't exist";
    
    case 'auth/wrong-password' :
      return "Incorrect Password"

    case 'auth/invalid-email' :
      return "The Email is invalid";

    case 'auth/missing-password' :
      return "please enter your password."

    default :
    return(errorCode)
    
  }
}

function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the regex pattern
  if (!emailRegex.test(email)) {
    return false;
}

  return true; // No error
}
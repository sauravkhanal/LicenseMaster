
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"

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
const auth = getAuth(app);

$('#recovery_mail').click((e) =>  {

    e.preventDefault();
    const email = document.getElementById('email').value;
    
    if (email == "")  {
        showPopup("Please Enter your Email")
    }
    else if (validateEmail(email) == false) {
        showPopup("Invalid Email format !!")
    }
    else {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            showPopup(`Password reset email sent to <strong>"${email}"</strong>`);
        })
        
        .catch((error)=>  {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode == "auth/user-not-found") {
                showPopup("<h3>Account doesn't exist!</h3><br>Please register.")
            }
            else {
                showPopup(`Oops! Error occured<br> ${errorCode} <br> ${errorMessage}`);
            }
        });
    }
});
    
const popup = document.getElementById("popup") //dialog doesn't work with jquery

$("#popup-exit-btn").click(()=>  {
    popup.close()
})

function showPopup(text)  {
  $("#popup-text").html(text);
  popup.showModal()
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
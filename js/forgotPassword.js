
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail  } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"
import { validateEmail , showPopup, closePopup} from "./modules.js";
closePopup(); //adds event listener to close poopup 

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
    
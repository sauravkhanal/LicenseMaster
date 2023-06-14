
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"
import { validateEmail, generateErrorMessage,showPopup,closePopup} from "./modules.js";
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
			window.open("loggedin.html","_self");
		})
		.catch((error) => {
			const errorCode = error.code;
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
    showPopup(`Oops! Error occured<br> ${errorCode} <br> ${errorMessage} <br> email: ${email}`);
  });
});
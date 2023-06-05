
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

document.getElementById("recovery_mail").addEventListener('click', function (e) {
    e.preventDefault();
    console.log(1);

    const email = document.getElementById('email').value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert(`Password reset email sent to ${email}`);
        })

        .catch((error)=>  {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Oops! Error occured\n ${errorCode} : ${errorMessage}`);
        });

})

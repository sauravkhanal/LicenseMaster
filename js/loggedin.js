
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const auth = getAuth();

// console.log(app);
// console.log(analytics);
// console.log(auth)


// signOut

document.getElementById("logout").addEventListener("click",function()  {
    // window.alert('logout btn clicked');

    signOut(auth).then(() => {
    // Sign-out successful.
    // alert("sign out successful !")
    window.open("login.html","_self")

    }).catch((error) => {
    // An error happened.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Oops! Error occured\n ${errorCode} : ${errorMessage}`)
    });
        
});

document.getElementById("me").addEventListener("click", function(e)  {
    // alert("who am i?")
    // e.preventDefault();
    const user = auth.currentUser;

    document.getElementById("user_detail").innerHTML = "Email : " + user.email + "<br>" + "UID : " + user.uid + "<br>" + "Display Name : " + user.displayName + "<br>" + "Email verified : " + user.emailVerified; 
})


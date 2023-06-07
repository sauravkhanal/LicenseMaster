import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signOut, sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"

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

// signOut

document.getElementById("logout").addEventListener("click",function()  {
    // window.alert('logout btn clicked');

    signOut(auth).then(() => {
    // Sign-out successful.
    // alert("sign out successful !")
    window.open("https://orionisacademy.com","_self")

    }).catch((error) => {
    // An error happened.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Oops! Error occured\n ${errorCode} : ${errorMessage}`)
    });
        
});

//get user data
document.getElementById("me").addEventListener("click", function(e)  {
    // alert("who am i?")
    // e.preventDefault();
    const user = auth.currentUser;

    document.getElementById("user_detail").innerHTML = "Email : " + user.email + "<br>" + "UID : " + user.uid + "<br>" + "Display Name : " + user.displayName + "<br>" + "Email verified : " + user.emailVerified; 
})

//send email verification link
document.getElementById("verifyEmail").addEventListener('click', function () {
    const user = auth.currentUser;

    if (user.emailVerified)  {
        alert(`${user.email} is already verified !!`)
    }
    else  {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            alert(`Email verification link sent to ${user.email}`);
        })
    
        .catch((error)=>  {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Oops! Error occured\n ${errorCode} : ${errorMessage}`);
        });
    }

})

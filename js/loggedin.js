import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signOut, sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"
import { showPopup,closePopup } from "./modules.js";
closePopup();

// var jQuery = document.createElement("script")
// jQuery.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
// document.body.appendChild(jQuery)

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

    signOut(auth).then(() => {
    window.open("index.html","_self");

    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    showPopup(`Oops! Error occured<br>${errorCode} : ${errorMessage}`);
    });
        
});

//get user data
document.getElementById("me").addEventListener("click", function(e)  {
    // alert("who am i?")
    // e.preventDefault();
    const user = auth.currentUser;
    $("#user_detail").html( "Email : " + user.email + "<br>" 
                                    + "UID : " + user.uid + "<br>" 
                                    + "Display Name : " + user.displayName + "<br>" 
                                    + "Email verified : " + user.emailVerified )
})

//send email verification link
$("#verifyEmail").click(()=> {
    const user = auth.currentUser;

    if (user.emailVerified)  {
        showPopup(`${user.email} is already verified !!`)
    }
    else  {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            // alert(`Email verification link sent to ${user.email}`);
            showPopup(`<h3>Successful !</h3>Email verification link sent to ${user.email}`);
        })
        .catch((error)=>  {
            const errorCode = error.code;
            const errorMessage = error.message;
            showPopup(`<h3>Oops! Error occured</h3><br> ${errorCode} : ${errorMessage}`)
        });
    }

})

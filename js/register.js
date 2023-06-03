
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"
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


    // create new user

    // document.getElementById("register").addEventListener("click",function()  {

    //     alert("clicked")
    //     const email = document.getElementById("email").value;
    //     const password = document.getElementById("password").value;

    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //     // Signed in 
    //     alert("Account creation Successful")
    //     window.open("loggedin.html","_self")
    //     const user = userCredential.user;
    //     console.log(user);
    //     // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         alert(`Oops! Error occured\n ${errorCode} : ${errorMessage}`)
    //     });


    // });
    //create user with email and password

    document.getElementById("register").addEventListener("click",function(e)  {
        // alert(' btn clicked ');const auth = getAuth();
        e.preventDefault()
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            alert('Account has been created successfully');
            window.open('login.html',"_self");

            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Oops error occured.\n ${errorCode} ${errorMessage}`)
            // ..
          });


    })
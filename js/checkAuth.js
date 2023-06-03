  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"
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


  // check if user is authenticated and display logged in page

  const checkAuthState = async() =>  {
    onAuthStateChanged(auth,user =>  {
      if(user)  {
        window.open("loggedin.html","_self");
        alert(`Welcome back ${user.email} you're still logged in`)
      }

    })
  }

  checkAuthState();
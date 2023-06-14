// commonly used funtions

function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if the email matches the regex pattern
    if (!emailRegex.test(email)) {
      return false;
    }
    return true; // No error
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

function showPopup(text)  {
    $("#popup-text").html(text);    
    popup.showModal()
}

function closePopup()  {
    $("#popup-exit-btn").click(()=>  {
        closePopup();
    })    
    document.getElementById("popup").close();//dialog doesn't work with jquery
}


export {validateEmail, generateErrorMessage, showPopup, closePopup}
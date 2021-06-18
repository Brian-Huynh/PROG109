function validateForm(){

  //First Name validation
  var validFirstname = false;
  var FirstName = document.getElementById("FirstName").value;
  var letters = /^[A-Za-z]+$/;

  if (FirstName === "" ) {
    document.getElementById("errorMessage1").innerHTML = "Please enter your first name.";
  } else if (FirstName.length > 20 ) {
    document.getElementById("errorMessage1").innerHTML = "Exceeded the character limit (50)";
  } else if (letters.test(FirstName) === false)  {
    document.getElementById("errorMessage1").innerHTML = "Letters only.";
  }
  
  else {
    validFirstname = true;
    document.getElementById("errorMessage1").innerHTML = "";}
  
  
  //LastName Validation
  var validLastname = false;
  var LastName = document.getElementById("LastName").value;

  if (LastName === "" ) {
    document.getElementById("errorMessage2").innerHTML = "Please enter your last name.";
  } else if (LastName.length > 50 ) {
    document.getElementById("errorMessage2").innerHTML = "Exceeded the character limit (50)";
  } else if (letters.test(LastName) === false) {
    document.getElementById("errorMessage2").innerHTML = "Letters only.";
  }

  else {
     validLastname = true;
    document.getElementById("errorMessage2").innerHTML = "";}
  
  //Email Validation
  var validEmail = false;
  var Email = document.getElementById("Email").value;
  var atpos = Email.indexOf("@");
  var dotpos = Email.lastIndexOf(".");
  

  if (Email === "" ) {
    document.getElementById("errorMessage3").innerHTML = "Please enter your email.";
  } else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>= Email.length) { 
    document.getElementById("errorMessage3").innerHTML = "Please enter a valid email."; 
  }

  else{
    document.getElementById("errorMessage3").innerHTML = "";
   validEmail = true;}
  
  
  
  
  if (validFirstname === false || validLastname === false || validEmail === false) {
    return false;
  }
  
}

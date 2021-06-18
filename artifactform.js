function validateForm(){
  
  
  //First Name validation
  var validFirstname = false;
  var FirstName = document.getElementById("FirstName").value;
  var letters = /^[A-Za-z]+$/;

  if (FirstName === "" ) {
    document.getElementById("errorMessage1").innerHTML = "Please enter your first name.";
  } else if (FirstName.length > 20 ) {
    document.getElementById("errorMessage1").innerHTML = "Exceeded the character limit (20)";
  } else if (letters.test(FirstName === false) ) {
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
  } else if (letters.test(LastName === false) ) {
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
  } else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>= userEmail.length) { 
    document.getElementById("errorMessage3").innerHTML = "Please enter a valid email."; 
  }

  else{
    document.getElementById("errorMessage3").innerHTML = "";
   validEmail = true;}
  
  //Phone Validation
  var validPhone = false;
  var Phone = document.getElementById("Phone").value;

  if (Phone === "" ) {
    document.getElementById("errorMessage4").innerHTML = "Please enter your phone number.";
  } else if (Phone.length > 15 ) {
    document.getElementById("errorMessage4").innerHTML = "Exceeded character limit (15)";}
  else if (isNaN(Phone)) {
    document.getElementById("errorMessage4").innerHTML = "Enter a valid phone number.";}

  else{
    document.getElementById("errorMessage4").innerHTML = "";
   validPhone = true;}
  
  //Username Validation
  var validUsername = false;
  var Username = document.getElementById("Username").value;

  if (Username === "" ) {
    document.getElementById("errorMessage5").innerHTML = "Please enter your username.";
  } else if (Username.length > 12 ) {
    document.getElementById("errorMessage5").innerHTML = "Exceeded the character limit (12)";
  }

  else {
    document.getElementById("errorMessage5").innerHTML = "";
   validUsername = true;}
  
  
  //Password Validation
  var validPassword = false;
  var Password = document.getElementById("Password").value;

  if (Password === "" ) {
    document.getElementById("errorMessage6").innerHTML = "Please enter your password.";
  } else if (Password.length > 7 ) {
    document.getElementById("errorMessage6").innerHTML = "Exceeded the character limit (7)";
  }

  else {
    document.getElementById("errorMessage6").innerHTML = "";
   validPassword = true;}
  
  
  //Address Validation
  var validAddress = false;
  var Address = document.getElementById("Address").value;

  if (Address === "" ) {
    document.getElementById("errorMessage7").innerHTML = "Please enter your address.";
  } 

  else{
    document.getElementById("errorMessage7").innerHTML = "";
   validAddress = true;}
  
  //City Validation
  var validCity = false;
  var City = document.getElementById("City").value;

  if (City === "" ) {
    document.getElementById("errorMessage8").innerHTML = "Please enter your city.";
  } 

  else{
    document.getElementById("errorMessage8").innerHTML = "";
   validCity = true;}
  
  //State Validation
  var validState = false;
  var State = document.getElementById("State").value;

  if (State === "00" ) {
    document.getElementById("errorMessage9").innerHTML = "Please enter your State.";
  } 

  else{
    document.getElementById("errorMessage9").innerHTML = "";
   validState = true;}
  
  //Country Validation
  var validCountry = false;
  var Country = document.getElementById("Country").value;

  if (Country === "00" ) {
    document.getElementById("errorMessage10").innerHTML = "Please enter your country.";
  } 

  else{
    document.getElementById("errorMessage10").innerHTML = "";
   validCountry = true;}
  
  //Zip Code Validation
  var validZipCode = false;
  var ZipCode = document.getElementById("ZipCode").value;

  if (ZipCode === "" ) {
    document.getElementById("errorMessage11").innerHTML = "Please enter your Zip Code.";
  } else if (ZipCode.length > 5 ) {
    document.getElementById("errorMessage11").innerHTML = "Enter a valid 5-Digit zip code";
  }

  else{
    document.getElementById("errorMessage11").innerHTML = "";
   validZipCode = true;}
  
  
  
  if (validFirstname === false || validLastname === false || validEmail === false || validPhone === false || validUsername === false || validPassword === false || validAddress === false || validCity === false || validState === false || validCountry === false || validZipCode === false) {
    return false;
  }
  
}

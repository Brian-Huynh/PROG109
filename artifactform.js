function validateForm(){
  
  //First Name validation
  var validFirstname = false;
  var FirstName = document.getElementById("FirstName").value;

  if (FirstName === "" ) {
    document.getElementById("errorMessage1").innerHTML = "Please enter your first name.";
  } 

  else
   validFirstname = true;
  
  
  //LastName Validation
  var validLastname = false;
  var LastName = document.getElementById("LastName").value;

  if (LastName === "" ) {
    document.getElementById("errorMessage2").innerHTML = "Please enter your last name.";
  } 

  else
   validLastname = true;
  
  //Email Validation
  var validEmail = false;
  var Email = document.getElementById("Email").value;

  if (Email === "" ) {
    document.getElementById("errorMessage3").innerHTML = "Please enter your email.";
  } 

  else{
   validEmail = true;}
  
  //Phone Validation
  var validPhone = false;
  var Phone = document.getElementById("Phone").value;

  if (Phone === "" ) {
    document.getElementById("errorMessage4").innerHTML = "Please enter your phone number.";
  } 

  else{
   validPhone = true;}
  
  //Username Validation
  var validUsername = false;
  var Username = document.getElementById("Username").value;

  if (Username === "" ) {
    document.getElementById("errorMessage5").innerHTML = "Please enter your username.";
  } 

  else {
   validUsername = true;}
  
  
  //Password Validation
  var validPassword = false;
  var Password = document.getElementById("Password").value;

  if (Password === "" ) {
    document.getElementById("errorMessage6").innerHTML = "Please enter your password.";
  } 

  else {
   validPassword = true;}
  
  
  //Address Validation
  var validAddress = false;
  var Address = document.getElementById("Address").value;

  if (Address === "" ) {
    document.getElementById("errorMessage7").innerHTML = "Please enter your address.";
  } 

  else{
   validAddress = true;}
  
  //City Validation
  var validCity = false;
  var City = document.getElementById("City").value;

  if (City === "" ) {
    document.getElementById("errorMessage8").innerHTML = "Please enter your city.";
  } 

  else{
   validCity = true;}
  
  //State Validation
  var validState = false;
  var State = document.getElementById("State").value;

  if (State === "00" ) {
    document.getElementById("errorMessage9").innerHTML = "Please enter your State.";
  } 

  else{
   validState = true;}
  
  //Country Validation
  var validCountry = false;
  var Country = document.getElementById("Country").value;

  if (Country === "00" ) {
    document.getElementById("errorMessage10").innerHTML = "Please enter your country.";
  } 

  else{
   validCountry = true;}
  
  //Zip Code Validation
  var validZipCode = false;
  var ZipCode = document.getElementById("ZipCode").value;

  if (ZipCode === "" ) {
    document.getElementById("errorMessage11").innerHTML = "Please enter your Zip Code.";
  } 

  else{
   validZipCode = true;}
}

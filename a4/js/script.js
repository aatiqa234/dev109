//Check to see if are fields are valid before submitting 
function isValid() {
  // Check it it is all return true
    if (firstName() &&
        lastName() &&
        email() &&
        phone() &&
        username() &&
        password() &&
        address() &&
        city() &&
        state() &&
        country() &&
        zipcode() &&
        comments()) {
      // when everthing work allow for submit
        return true;
    } else {
      // Show error message if the valid is not true 
        document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        // if there are errors stop to submit it 
        event.preventDefault();
      // It's blocked because of the error 
        return false;
    }
}
// Validate First Name 
function firstName() {
  // If the first name is invalid 
    var validFirstname = false;
  // Enter the first name
    var firstname = document.getElementById("FirstName").value;
  // It will show any error messages 
    var errorMessages = "";
  // Check if the name is empty or too long 
    if (firstname === "null" || firstname === "" || firstname.length > 20) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
    } 
  // Check if it contains only letters and characters 
  else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
    } else {
      // If the first name is valid
        validFirstname = true;
    }
  // Show error messages if any
    document.getElementById("fnameError").innerHTML = errorMessages;
  // If the first name is correct return valid, false if not
    return validFirstname;
}
//Validate Last Name 
function lastName() {
  // If the last name is invalid 
    var validLastname = false;
   // Enter the last name
    var lastname = document.getElementById("LastName").value;
   // It will show any error messages 
    var errorMessages = "";
  // Check if the name is empty or too long 
    if (lastname === "null" || lastname === "" || lastname.length > 20) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
      // Check if it contains only letters and characters 
    } else if (lastname.match("^[a-zA-Z,.'-]+$") === null) {
        errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
    } else {
      // If the last name is valid
        validLastname = true;
    }
  // Show error messages if any
    document.getElementById("lastnameError").innerHTML = errorMessages;
  // If the last name is correct return valid, false if not
    return validLastname;
}
//Validate Email 
function email() {
  // If the email is wrong 
    var validEmail = false;
  // Enter the email 
    var userEmail = document.getElementById("Email").value;
  // Check if it's wrong 
    var errorMessages = "";
    // Check if the user put these variables 
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    // Check if th email is empty 
    if (userEmail === "") {
        errorMessages = "<p>Email is required</p>";
      //Check if "@" is mention in the email 
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages = "<p>Invalid email format should @ this</p>";
    } 
  // Check if everthing is correct 
  else {
        validEmail = true;
    }
// If there is any problem show error messages 
    document.getElementById("emailError").innerHTML = errorMessages;
// Return true 
    return validEmail;
}
// Validate Phone 
function phone() {
  // If the phone number is wrong 
    var validPhone = false;
  // Enter the Phone 
    var phoneInput = document.getElementById("Phone");
  // Don't put the non-number characters 
    var phoneNumber = phoneInput.value.replace(/\D/g, ""); 
  //Check if it's wrong 
    var errorMessages = "";
 // Check if the digits is more than 15 or it's empty 
    if (phoneNumber === "" || phoneNumber.length > 15) {
        errorMessages = "<p>Phone number is required and cannot exceed 15 digits</p>";
    }
      // check if it has only numbers 
    else if (!/^\d+$/.test(phoneNumber)) {
        errorMessages = "<p>Phone number must contain only numbers</p>";
    } 
  // If it contains only number it mark as valid 
  else {
        validPhone = true;
        // If the phone number has 10 digits, format as 1-2-3
        if (phoneNumber.length === 10) {
            phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        } 
    // If the phone number as 11 digits, format as 1-2-3-4
    else if (phoneNumber.length === 11) {
            phoneNumber = phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1-$2-$3-$4");
        } 
    // if the phone number has 15 digits, format as 1-2-3-4
    else if (phoneNumber.length === 15) {
            phoneNumber = phoneNumber.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
        }

        // Put in the input field 
        phoneInput.value = phoneNumber;
    }
    // Show the error message if any 
    document.getElementById("phoneError").innerHTML = errorMessages;
  // Return if it's valid or invalid 
    return validPhone;
}
// Validate username 
function username() {
    // If the username is wrong 
    var validUsername = false;
  // Enter the username 
    var userInput = document.getElementById("Username").value.trim(); 
  //Check if it's wrong 
    var errorMessages = "";
  // Check if the username is empty 
    if (userInput === "") {
        errorMessages = "<p>Username is required</p>";
    } 
  // Check if the username is longer than 12 digits 
  else if (userInput.length > 12) {
        errorMessages = "<p>Username cannot be more than 12 characters</p>";
    } 
  // Check if it valid 
  else {
        validUsername = true;
    }
// Check if username is valid
    document.getElementById("usernameError").innerHTML = errorMessages;

    return validUsername;
}
// Validate password 
function password() {
  // if the password is wrong 
    var validPassword = false;
  // Enter the password 
    var userPassword = document.getElementById("Password").value.trim(); 
  // If it is wrong show as an error message 
    var errorMessages = "";
// Check the password patterns 
// 1 lowercase letter (a-z)
// 1 uppercase letter (A-Z)   
// 1 number (0-9)
// 1 special character (!@#$%^&*+_())
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{1,7}$/;
  // Check if the password is empty 
    if (userPassword === "") {
        errorMessages = "<p>Password is required</p>";
    } 
  // Check if the password is longer than 7 characters 
  else if (userPassword.length > 7) {
        errorMessages = "<p>Password cannot be more than 7 characters</p>";
    } 
  // Check if the password match the pattern 
  else if (!passwordPattern.test(userPassword)) {
        errorMessages = "<p>Password must contain at least:<br>• 1 uppercase letter (A-Z)<br>• 1 lowercase letter (a-z)<br>• 1 number (0-9)<br>• 1 special character (!@#$%^&*()_+)</p>";
    } 
  // Set valid when is it true 
  else {
        validPassword = true;
    }
    // Show error messages 
    document.getElementById("passwordError").innerHTML = errorMessages;
  // Valid if it is true 
    return validPassword;
}
// Validated address 
function address() {
  // If address is wrong 
    var validAddress = false;
  // Enter the address 
    var userAddress = document.getElementById("Address").value.trim(); 
  // Show error message if wrong 
    var errorMessages = "";
    // Check if it's empty 
    if (userAddress === "") {
        errorMessages = "<p>Address is required</p>";
    } 
  // if it correct  than valid
  else {
        validAddress = true;
    }
// Show error messages 
    document.getElementById("addressError").innerHTML = errorMessages;
  // Valid if it true 
    return validAddress;
}
// Validated city 
function city() {
  // Check if it not entered 
    var validCity = false;
  // Enter the city 
    var userCity = document.getElementById("City").value.trim(); 
  // Show error messages if it wrong 
    var errorMessages = "";
   // Check if it is empy 
    if (userCity === "") {
        errorMessages = "<p>City is required</p>";
    } 
  // If it correct than valid city true 
  else {
        validCity = true;
    }
    // If there is an error show a message 
    document.getElementById("cityError").innerHTML = errorMessages;
// Valid if it true 
    return validCity;
}
// Validate state 
function state() {
  // Check if it not entered 
    var validState = false;
  // Enter the value 
    var userState = document.getElementById("State").value;
  // Enter the value 
    var userCountry=document.getElementById("Country").value;
  // Show an error message if it's wrong 
    var errorMessages = "";

    // If the country is USA, check if the state is empty 
    if (userCountry === "USA") {
        if (userState === ""){
        errorMessages = "<p>State is required when the country is USA</p>";
    } 
      // If the state is not empty, set it validated 
      else {
        validState = true;
    }
    } 
  // No Validation is required if the country is not USA
  else{
        validState=true;  
    }
    // Show the error messages if there is a problem 
    document.getElementById("stateError").innerHTML = errorMessages;
// If the state and country is slected return true 
    return validState;
}
// Validation country 
function country() {
  // Check if it is not entered 
    var validCountry = false;
  // Enter the country 
    var userCountry = document.getElementById("Country").value;
  // Show an error messages if it's wrong 
    var errorMessages = "";

    // Check if it is empty 
    if (userCountry === "") {
        errorMessages = "<p>Country is required</p>";
    } 
  // If everthing is okay set validated 
  else {
        validCountry = true;
    }

   // Show an error messags if there is any  
    document.getElementById("countryError").innerHTML = errorMessages;
// Return true 
    return validCountry;
}
// Validated zipcode 
function zipcode() {
  // Check if it not entered 
    var validZipcode = false;
  // Enter the Country 
    var userCountry = document.getElementById("Country").value;
  // Enter the ZipCode when it's USA 
    var userZip = document.getElementById("zipcode").value;
  // Show an error message if something is wrong 
    var errorMessages = "";
    // If the country is USA, then check the zipcode 
    if (userCountry === "USA") {
        var zipPattern = /^[0-9]{5}$/; // Only 5 digits
// Check if the zipcode is empty or doesn' match with the pattern 
        if (userZip === "" || !zipPattern.test(userZip)) {
            errorMessages = "<p>Zip Code is required and must be exactly 5 digits</p>";
        } 
      // If it is true then select Valid 
      else {
            validZipcode = true;
        }
    } 
 // No validated need if it is not USA  
  else {
 
        validZipcode = true;
    }

    // Show an message when there is an error 
    document.getElementById("zipcodeError").innerHTML = errorMessages;
// Return if it is true 
    return validZipcode;
}
// Validation comments 
function comments() {
  //Check if  the comments are enter
    var validComments = true; 
  // Enter the comments
    var userComments = document.getElementById("comments").value;
  // Show an error messages 
    var errorMessages = "";

    // The words can't be more than 500 
    if (userComments.length > 500) {
        errorMessages = "<p>Comments cannot exceed 500 characters</p>";
        validComments = false;
    }

    // If there is any error show an messages 
    document.getElementById("commentsError").innerHTML = errorMessages;

    return validComments;
}

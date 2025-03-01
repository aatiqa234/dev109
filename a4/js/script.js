function isValid() {
    if (firstName()&&
        lastName()&&
        email()&&
        phone()&&
        username()&&
        password()&&
        addres()&&
        city()&&
        state()&&
        country()&&
        zipcode()&&
        comments()&&
   )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

function firstName(){
    //1) Create variable
    var validFirstname=false;
    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";
    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };
  
    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;
    //5) return status of each field
    return (validFirstname);
}
function lastname(){
  var ValidLastname=false;
  var lastname = document.getElementByID("LastName").value;
  var errorMessages="";
if (lastname==="null" || lastname==="" || lastname.length >20){
  errorMessages += "<p> The last name is required and cannot be greater than 20 characters</p>";
  console.log("Last name invalid-length")
} else if(lastname.math("^[a-zA-Z,.'0]+$")===null){
  errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.;-)</p>"
  console.log("Last name invalid-bad characters")
} else { 
  validLastname = true;
  console.log("Last name valid")
}
  document.getElementByID("lastname").innerHTML = errorMessages; 
  return (validLastname);
}
function email() {
    var validEmail = false;
    var userEmail = document.getElementById("email").value;
    var errorMessages = "";

    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    if (userEmail === "") {
        errorMessages = "<p>Email is required</p>";
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages = "<p>Invalid email format</p>";
    } else {
        validEmail = true;
    }

    /
    document.getElementById("emailError").innerHTML = errorMessages;

    return validEmail;
}
function phone() {
    var validPhone = false;
    var phoneInput = document.getElementById("phone");
    var phoneNumber = phoneInput.value.replace(/\D/g, ""); 
    var errorMessages = "";

 
    if (phoneNumber === "" || phoneNumber.length > 15) {
        errorMessages = "<p>Phone number is required and cannot exceed 15 digits</p>";
    } else if (!/^\d+$/.test(phoneNumber)) {
        errorMessages = "<p>Phone number must contain only numbers</p>";
    } else {
        validPhone = true;
        
        
        if (phoneNumber.length === 10) {
            phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        } else if (phoneNumber.length === 11) {
            phoneNumber = phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1-$2-$3-$4");
        } else if (phoneNumber.length === 15) {
            phoneNumber = phoneNumber.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
        }

        
        phoneInput.value = phoneNumber;
    }

    // Send error message to HTML
    document.getElementById("phoneError").innerHTML = errorMessages;
    return validPhone;
}
function username() {
    var validUsername = false;
    var userInput = document.getElementById("username").value.trim(); 
    var errorMessages = "";

    
    if (userInput === "") {
        errorMessages = "<p>Username is required</p>";
    } else if (userInput.length > 12) {
        errorMessages = "<p>Username cannot be more than 12 characters</p>";
    } else {
        validUsername = true;
    }

    
    document.getElementById("usernameError").innerHTML = errorMessages;

    return validUsername;
}
function password() {
    var validPassword = false;
    var userPassword = document.getElementById("password").value.trim(); 
    var errorMessages = "";

    
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{1,7}$/;

    
    if (userPassword === "") {
        errorMessages = "<p>Password is required</p>";
    } else if (userPassword.length > 7) {
        errorMessages = "<p>Password cannot be more than 7 characters</p>";
    } else if (!passwordPattern.test(userPassword)) {
        errorMessages = "<p>Password must contain at least:<br>• 1 uppercase letter (A-Z)<br>• 1 lowercase letter (a-z)<br>• 1 number (0-9)<br>• 1 special character (!@#$%^&*()_+)</p>";
    } else {
        validPassword = true;
    }

    
    document.getElementById("passwordError").innerHTML = errorMessages;
}
  
function address() {
    var validAddress = false;
    var userAddress = document.getElementById("address").value.trim(); 
    var errorMessages = "";

    
    if (userAddress === "") {
        errorMessages = "<p>Address is required</p>";
    } else {
        validAddress = true;
    }

    
    document.getElementById("addressError").innerHTML = errorMessages;

    return validAddress;
}
function city() {
    var validCity = false;
    var userCity = document.getElementById("city").value.trim(); 
    var errorMessages = "";

   
    if (userCity === "") {
        errorMessages = "<p>City is required</p>";
    } else {
        validCity = true;
    }

    
    document.getElementById("cityError").innerHTML = errorMessages;

    return validCity;
}
function state() {
    var validState = false;
    var userState = document.getElementById("state").value;
    var errorMessages = "";

    
    if (userState === "") {
        errorMessages = "<p>State is required</p>";
    } else {
        validState = true;
    }

    
    document.getElementById("stateError").innerHTML = errorMessages;

    return validState;
}

function country() {
    var validCountry = false;
    var userCountry = document.getElementById("country").value;
    var errorMessages = "";

    
    if (userCountry === "") {
        errorMessages = "<p>Country is required</p>";
    } else {
        validCountry = true;
    }

    
    document.getElementById("countryError").innerHTML = errorMessages;

    return validCountry;
}

function zipcode() {
    var validZipcode = false;
    var userCountry = document.getElementById("country").value;
    var userZip = document.getElementById("zipcode").value;
    var errorMessages = "";

    
    if (userCountry === "USA") {
        var zipPattern = /^[0-9]{5}$/; // Only 5 digits

        if (userZip === "" || !zipPattern.test(userZip)) {
            errorMessages = "<p>Zip Code is required and must be exactly 5 digits</p>";
        } else {
            validZipcode = true;
        }
    } else {
        
        validZipcode = true;
    }

    
    document.getElementById("zipError").innerHTML = errorMessages;

    return validZipcode;
}

function comments() {
    var validComments = true; 
    var userComments = document.getElementById("comments").value;
    var errorMessages = "";

    
    if (userComments.length > 500) {
        errorMessages = "<p>Comments cannot exceed 500 characters</p>";
        validComments = false;
    }

    
    document.getElementById("commentsError").innerHTML = errorMessages;

    return validComments;
}

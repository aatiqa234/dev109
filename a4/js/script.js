function isValid(event) {
  event.preventDefault();
  document.getElementById("submitError").innerHTML = "";

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
    return true;
  } else {
    document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
    return false;
  }
}

function firstName() {
  var valid = false;
  var firstname = document.getElementById("FirstName").value;
  var errorMessages = "";
  if (firstname === "" || firstname.length > 20) {
    errorMessages += "<p>The first name is required and cannot exceed 20 characters</p>";
  } else if (!/^[a-zA-Z ,.'-]+$/.test(firstname)) {
    errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
  } else {
    valid = true;
  }
  document.getElementById("fnameError").innerHTML = errorMessages;
  return valid;
}

function lastName() {
  var valid = false;
  var lastname = document.getElementById("LastName").value;
  var errorMessages = "";
  if (lastname === "" || lastname.length > 20) {
    errorMessages += "<p>The last name is required and cannot exceed 20 characters</p>";
  } else if (!/^[a-zA-Z,.'-]+$/.test(lastname)) {
    errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
  } else {
    valid = true;
  }
  document.getElementById("lastnameError").innerHTML = errorMessages;
  return valid;
}

function email() {
  var valid = false;
  var userEmail = document.getElementById("Email").value;
  var errorMessages = "";
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");

  if (userEmail === "") {
    errorMessages = "<p>Email is required</p>";
  } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
    errorMessages = "<p>Invalid email format</p>";
  } else {
    valid = true;
  }
  document.getElementById("emailError").innerHTML = errorMessages;
  return valid;
}

function phone() {
  var valid = false;
  var phoneInput = document.getElementById("Phone");
  var phoneNumber = phoneInput.value.replace(/\D/g, "");
  var errorMessages = "";

  if (phoneNumber === "" || phoneNumber.length > 15) {
    errorMessages = "<p>Phone number is required and cannot exceed 15 digits</p>";
  } else if (!/^\d+$/.test(phoneNumber)) {
    errorMessages = "<p>Phone number must contain only numbers</p>";
  } else {
    valid = true;
    if (phoneNumber.length === 10) {
      phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    } else if (phoneNumber.length === 11) {
      phoneNumber = phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1-$2-$3-$4");
    } else if (phoneNumber.length === 15) {
      phoneNumber = phoneNumber.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
    }
    phoneInput.value = phoneNumber;
  }

  document.getElementById("phoneError").innerHTML = errorMessages;
  return valid;
}

function username() {
  var valid = false;
  var usernameInput = document.getElementById("Username").value.trim();
  var errorMessages = "";

  if (usernameInput === "") {
    errorMessages = "<p>Username is required</p>";
  } else if (usernameInput.length > 12) {
    errorMessages = "<p>Username cannot be more than 12 characters</p>";
  } else {
    valid = true;
  }

  document.getElementById("usernameError").innerHTML = errorMessages;
  return valid;
}

function password() {
  var valid = false;
  var passwordInput = document.getElementById("Password").value.trim();
  var errorMessages = "";
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{1,7}$/;

  if (passwordInput === "") {
    errorMessages = "<p>Password is required</p>";
  } else if (passwordInput.length > 7) {
    errorMessages = "<p>Password cannot be more than 7 characters</p>";
  } else if (!passwordPattern.test(passwordInput)) {
    errorMessages = "<p>Password must contain at least:<br>• 1 uppercase letter (A-Z)<br>• 1 lowercase letter (a-z)<br>• 1 number (0-9)<br>• 1 special character (!@#$%^&*()_+)</p>";
  } else {
    valid = true;
  }

  document.getElementById("passwordError").innerHTML = errorMessages;
  return valid;
}

function address() {
  var valid = false;
  var addressInput = document.getElementById("Address").value.trim();
  var errorMessages = "";

  if (addressInput === "") {
    errorMessages = "<p>Address is required</p>";
  } else {
    valid = true;
  }

  document.getElementById("addressError").innerHTML = errorMessages;
  return valid;
}

function city() {
  var valid = false;
  var cityInput = document.getElementById("City").value.trim();
  var errorMessages = "";

  if (cityInput === "") {
    errorMessages = "<p>City is required</p>";
  } else {
    valid = true;
  }

  document.getElementById("cityError").innerHTML = errorMessages;
  return valid;
}

function state() {
  var valid = false;
  var stateInput = document.getElementById("State").value;
  var errorMessages = "";

  if (stateInput === "") {
    errorMessages = "<p>State is required</p>";
  } else {
    valid = true;
  }

  document.getElementById("stateError").innerHTML = errorMessages;
  return valid;
}

function country() {
  var valid = false;
  var countryInput = document.getElementById("Country").value;
  var errorMessages = "";

  if (countryInput === "") {
    errorMessages = "<p>Country is required</p>";
  } else {
    valid = true;
  }

  document.getElementById("countryError").innerHTML = errorMessages;
  return valid;
}

function zipcode() {
  var valid = false;
  var countryInput = document.getElementById("Country").value;
  var zipcodeInput = document.getElementById("Zipcode").value;
  var errorMessages = "";

  if (countryInput === "USA") {
    var zipPattern = /^[0-9]{5}$/;

    if (zipcodeInput === "" || !zipPattern.test(zipcodeInput)) {
      errorMessages = "<p>Zip Code is required and must be exactly 5 digits</p>";
    } else {
      valid = true;
    }
  } else {
    valid = true;
  }

  document.getElementById("zipError").innerHTML = errorMessages;
  return valid;
}

function comments() {
  var valid = true;
  var commentsInput = document.getElementById("Comments").value;
  var errorMessages = "";

  if (commentsInput.length > 500) {
    errorMessages = "<p>Comments cannot exceed 500 characters</p>";
    valid = false;
  }

  document.getElementById("commentsError").innerHTML = errorMessages;
  return valid;
}

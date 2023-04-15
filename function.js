/*
    JS steps
    1. Target ID & Classes
    2. Add Event Listesner in Submit
    3. Engine Function by Arrow Operator
    4. Test the System
*/
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

//  => = Arrow functions allow us to write shorter function syntax

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMsg = classes("error"),
successIcon  = classes("success-icon"),
failureIcon  = classes("failure-icon");
  
form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(username, 0, "Username cannot be blank.");
    engine(email, 1, "Email cannot be blank.");
    engine(password, 2, "Password cannot be blank.");
});

// Engine functions 

let engine = (id, serial, message) => {
    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else{
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
};
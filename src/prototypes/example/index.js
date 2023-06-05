/***********************************************************************************
Imports question manager, summary generator, answer piping and previous link history
************************************************************************************/
import '@ons/prototype-kit/src/helpers/index.js';

function validateForm_ForgotPasswordEmail(){
    console.log('run');
    let b = document.forms["myForm"]["email"].value;
    let c = document.forms["myForm"]["Confirmemail"].value;

    let y = b.trim();
    let z = c.trim();

    sessionStorage.setItem('ForgotPasswordEmail', y);    
    sessionStorage.setItem('ForgotPasswordConfirmEmail', z);   

    if ((y != "") && (z != "") && (y == z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == true)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/CheckEmail.html";    
    }
    if ((y != "") && (z == "") && (y.indexOf("@") == -1)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/errors/Email/InvalidEmail_NoConfirm.html";    
    }
    if ((y != "") && (z != "") && (y != z) && (y.indexOf("@") == -1)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/errors/Email/InvalidEmail_NotMatching.html";    
    }
    if ((y != "") && (z != "") && (y == z) && (y.indexOf("@") == -1)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/errors/Email/InvalidEmail.html";    
    }
    if ((y != "") && (z == "") && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == true)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/errors/Email/NoConfirm.html";    
    }
    if ((y == "") && (z != "")) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/errors/Email/NoEmail.html";    
    }
    if ((y == "") && (z == "")) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/errors/Email/NoEmailNoConfirm.html";    
    }
    if ((y != "") && (z != "") && (y != z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == true)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/errors/Email/NotMatching.html";    
    }
    if ((y != "") && (z == "") && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == false)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/errors/Email/NotONSEmail_NoConfirm.html";    
    }
    if ((y != "") && (z != "") && (y != z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == false)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/errors/Email/NotONSEmail_NotMatching.html";    
    }
    if ((y != "") && (z != "") && (y == z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == false)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/ForgotPassword/errors/Email/NotONSEmail.html";    
    }
}

window.validateForm_ForgotPasswordEmail = validateForm_ForgotPasswordEmail
function validateForm(){
    console.log('run');
    let a = document.forms["myForm"]["fullname"].value;
    let b = document.forms["myForm"]["email"].value;
    let c = document.forms["myForm"]["Confirmemail"].value;

    let x = a.trim();
    let y = b.trim();
    let z = c.trim();

    sessionStorage.setItem('Fullname', x);
    sessionStorage.setItem('EmailAddress', y);    
    sessionStorage.setItem('ConfirmedEmailAddress', z);   

    if ((x != "") && (y != "") && (z != "") && (y == z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == true)) {

        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/CheckEmail.html";    
    }
    if ((x == "") && (y == "") && (z == "")) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/AllinputsBlank.html";    
    }
    if ((x != "") && (y != "") && (z != "") && (y != z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == true)) {

        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/EmailsNotMatching.html";    
    }
    if ((x != "") && (y != "") && (z != "") && (y == z) && (y.indexOf("@") == -1)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/InvalidEmail.html";    
    }
    if ((x != "") && (y != "") && (z != "") && (y != z) && (y.indexOf("@") == -1)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/InvalidEmail_EmailsNotMatching.html";    
    }
    if ((x != "") && (y != "") && (z == "") && (y.indexOf("@") == -1)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoConfirmEmail_InvalidEmail.html";    
    }
    if ((x != "") && (y != "") && (z == "") && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == true)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoConfirmEmail.html";    
    }
    if ((x != "") && (y == "") && (z != "")) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoEmail.html";    
    }
    if ((x != "") && (y == "") && (z == "")) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoEmail_NoConfirmEmail.html";    
    }
    if ((x == "") && (y != "") && (z != "") && (y != z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == true)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoName_EmailsNotMatching.html";    
    }
    if ((x == "") && (y != "") && (z != "") && (y == z) && (y.indexOf("@") == -1)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoName_InvalidEmail.html";    
    }
    if ((x == "") && (y != "") && (z != "") && (y != z) && (y.indexOf("@") == -1)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoName_InvalidEmail_EmailsNotMatching.html";    
    }
    if ((x == "") && (y != "") && (z == "") && (y.indexOf("@") == -1)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoName_NoConfirmEmail_InvalidEmail.html";    
    }
    if ((x == "") && (y != "") && (z == "") && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == true)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoName_NoConfirmEmail.html";    
    }
    if ((x == "") && (y == "") && (z != "")) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoName_NoEmail_EmailsNotMatching.html";    
    }
    if ((x == "") && (y != "") && (z != "") && (y == z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == true)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NoName.html";    
    }
    if ((x == "") && (y != "") && (z != "") && (y != z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == false)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NotONSEmail_EmailNotMatching_NoName.html";    
    }
    if ((x != "") && (y != "") && (z != "") && (y != z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == false)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NotONSEmail_EmailNotMatching.html";    
    }
    if ((x != "") && (y != "") && (z == "") && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == false)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NotONSEmail_NoConfirmEmail.html";    
    }
    if ((x == "") && (y != "") && (z == "") && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == false)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NotONSEmail_NoName_NoConfirmEmail.html";    
    }
    if ((x == "") && (y != "") && (z != "") && (y == z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == false)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NotONSEmail_NoName.html";    
    }
    if ((x != "") && (y != "") && (z != "") && (y == z) && (y.indexOf("@") != -1) && (y.includes("@ons.gov.uk") == false)) {
        document.forms["myForm"].action = "/prototypes/example/login_journeys/CreateAccount/errors/createAccount/NotONSEmail.html";    
    }

}
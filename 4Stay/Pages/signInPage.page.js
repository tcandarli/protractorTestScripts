require("../Utilities/CustomLocators.js");


var signInPage = function(){

this.emailField = element(by.id("user_login"));
this.passwordField = element(by.id("user_password"));
this.logInButton = element(by.id("login_btn"));
this.signOutButton = $(".nav-item.nav-link");
this.errorMessage = element(by.id("login_status"));
this.expectedErrorMessage = "Invalid email or password. Please try again.";
this.close = $(".close");
this.signInTab =$(".modal-content");
this.facebookButton = $(".facebook-btn");
this.googleButton = $(".google-btn");
this.createNewAccountLink = $(".action-link");
this.signUpTab = $(".overlay.h-100");
}

module.exports = new signInPage();
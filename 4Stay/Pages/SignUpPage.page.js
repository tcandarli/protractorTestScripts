var SignUpPage = function () {

    this.signUpButton = $(".navbar-nav.ml-auto li:nth-child(3)");
    this.logInButton = $('.login-link.ml-auto.align-self-start.p-4');
    this.fourStayLogo = $('.logo.animated.fadeInDown.ml-auto.mr-auto');
    this.continueWithFaceBookButton = $('.btn.facebook-btn.w-100.m-0.mb-3');
    this.moreOptionsLink = element(by.linkText('More options'));
    this.firstName = $('#first-name');
    this.lastName = $('#last-name');
    this.email = $('#email');
    this.password = $('#password');
    this.termsAndConditions = $('.ml-1');
    this.pinkSignUpButton = $('.btn.btn-primary.w-100.m-0.ng-binding');
    



};

module.exports = new SignUpPage();
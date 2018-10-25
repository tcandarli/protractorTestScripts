var SignUpPage = function () {

    this.ContinueWithFacebookButton = $('.btn.facebook-btn.w-100.m-0.mb-3');
    this.ContinueWithGoogleButton = $('.btn.google-btn.w-100.m-0.mb-3');
    this.ContinueWithEmailButton = $('.btn.email-btn.w-100.m-0.mb-3');
    this.signUpButton = $(".navbar-nav.ml-auto li:nth-child(3)");
    this.logInButton = $('.login-link.ml-auto.align-self-start.p-4');
    this.fourStayLogo = $('.logo.animated.fadeInDown.ml-auto.mr-auto');
    this.moreOptionsLink = element(by.linkText('More options'));
    this.firstName = $('#first-name');
    this.lastName = $('#last-name');
    this.email = $('#email');
    this.password = $('#password');
    this.termsAndConditions = $('.ml-1');
    this.pinkSignUpButton = $('.btn.btn-primary.w-100.m-0.ng-binding');
    this.nextButton = $('.btn.btn-primary.w-100.m-0.mb-3');
    this.hostButton = $('.role-icon.host-icon');
    this.occupation = $('#occupation');
    this.phone = element(by.model('vm.user.phone'));
    this.about = element(by.model('vm.user.about_me'));
    this.yearOfBirth = element(by.model('vm.user.dob_year'));
    this.saveButton = $('.btn.btn-primary.w-100.m-0.ng-binding');

}

module.exports = new SignUpPage();
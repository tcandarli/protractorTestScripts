var ListYourStayPage = function(){


    
    this.navigateToList= element(by.css(".list.nav-item"));
    this.pageHeader=$("[class='text-center']");
    this.listYourstayForm= $('div#signup');
    this.facebookLogo =  $("a.btn.button-facebook span:nth-child(1)");
    this.facebookText=$("a.btn.button-facebook span:nth-child(2)");
    this.googleLogo =  $("a.btn.button-google span:nth-child(1)");
    this.googleText=$("a.btn.button-google span:nth-child(2)");
    this.firstName=$("#first_name");
    this.lastName=$("#last_name");
    this.email=$("#email");
    this.password=$("#password");
    this.phone=$("#phone");
    this.checkbox=$('.checkbox.i-minus-checks i');
    this.checkboxText=element(by.cssContainingText('.gray', 'I accept the 4stay.com'));
    this.accept=$(".gray");
    this.termsAndconditions=$("#eula_link");
    this.termsAndconditionsTag=element(by.linkText('Terms and Conditions'));
    this.createAccount=$("input[value='Create account']");
    this.alreadyHaveAccountLink=$(".login-link");
    this.alreadyHaveAccountLinkTag=element(by.linkText('Already have an account? Login here!'));
    this.occupation=$("#occupation");
    this.aboutMe= $("#about_me");
    this.dateOfBirth=$("#dob");
    this.saveButton=$(".btn-primary");
    this.logo=element(by.css("img[alt='Logo']"));
    this.searchBox = $("#top-place-search-box");
    this.searchButton=$('.fa.fa-search');
    this.loginButton=$("#top-navbar li:nth-child(1)");
    this.signupButton=$("#top-navbar li:nth-child(2)");
    this.helpButton=$("#top-navbar li:nth-child(3)");
    this.listYourStayButton=$("#top-navbar li:nth-child(4)");
    this.loginPage=$('.modal-content');
    this.phonefield=$("input[name='phone']");
    this.flag= $('.flag-container');
    this.country=$('.intl-tel-input.allow-dropdown>div>div');
    this.phoneVerificationCode=$('#verificationCode');



};

module.exports=new ListYourStayPage();
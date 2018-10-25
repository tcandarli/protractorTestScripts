require('../Utilities/CustomLocators.js');
var ListYourStayPage =require ('../Pages/ListYourStay.page.js');
var SignUpPage = require('../Pages/SignUpPage.page.js');
var Base = require('../Utilities/Base.js');
var SignUpMoreOptionsPage = require('../Pages/SignUpMoreOptionsPage.page.js');
var signInPage = require('../Pages/signInPage.page.js');
var homepageLinks = require ('../Pages/homepageLinks.js');
var feedbackPage = require ('../Pages/feedbackPage.js');
var feedbackData = require ('../TestData/feedbackData.json');
var loginData=require('../TestData/4stayData.json');
var SearchFunctionalityPage =  require('../Pages/SearchFunctionality.Page.js');
var data4stay=require("../TestData/4stayData.json");
var homePage = require ('../page/homePage.js');
var data = require ('../TestData/data.json');

describe('Main Test Suite', () => {
    
     
  describe('Automate Hotel Web Site',()=>{
              beforeEach(function(){
              browser.get('https://4stay.com/');
              browser.manage().window().maximize();
        });
              // Spec No-1 To Check Logo is Properly Displayed
        it('should check if Logo is visible',()=>{
                expect(homePage.logo.isDisplayed()).toBe(true);
            });
             //Spec No-2  To Check All Five Elements are Displayed on Top Right Side.
        it('Check  five columnn on front page',()=>{
                expect(homePage.fiveColumnOnFrontPage.getText()).toEqual(
                [ '+1 (202) 902-7833',
                    'Sign In',
                    'Sign Up',
                    'Help',
                    'LIST YOUR STAY' ]);
        });
       
            // Spec No-3 To Make Sure Text is Properly Displayed .   
        it('Check Text ', () => {
            expect(homePage.checkText.getText()).toEqual('Find your next perfect stay');
           });
  
      
        // Spec No-4 To Make Sure Text is Properly Displayed
        it(' Check  Text2  ', () => {  
         expect(homePage.checkText_2.getText()).toEqual('Rent medium to long-term furnished stays today!');
        });
        

        // SPec No-5 To Make Sure that Search-View and Display are properly placed
        it('  Check Search View and Stay button ',()=>{  
        expect(homePage.searchVStay.get(0).isDisplayed()).toBe(true);
                     
        });
        
        //Spec No-6 To Make Sure That Trending Stays Text is Located Properly
        it('Check Trending Stay Heading  ......', () => {  
         expect(homePage.trendStay.isDisplayed()).toBe(true);
        }); 
            
        // Spec No-7 To Make Sure That View Button is Functional    
         it('should check if it is clickible', () => {
         expect(homePage.checkButton.get(0).isEnabled()).toBe(true);
        });``
        
  });
  
  describe('Main Page', () => {
    var expectedText; 
    var EC = protractor.ExpectedConditions; 
beforeEach(() => {
Base.navigateToHome();
element(by.linkText("Sign In")).click();
});

it('should login',()=>{

    signInPage.emailField.sendKeys("vahdetkayact@gmail.com");
    signInPage.passwordField.sendKeys("2018Cybertek");
    signInPage.logInButton.click();
    browser.wait(EC.visibilityOf(signInPage.signOutButton),10000);
    signInPage.signOutButton.click();
    
});
it('should test if invalid email or password message appears', () => {
    
    signInPage.emailField.sendKeys("vahdetkayact@gmail.com");
    signInPage.passwordField.sendKeys("2018Cyberte");
    signInPage.logInButton.click();
    browser.wait(EC.visibilityOf(signInPage.errorMessage),5000);
    errorText=signInPage.errorMessage.getText();
        errorText.then((text)=>{
        
        expect(text).toEqual(signInPage.expectedErrorMessage);
        });
    



});
it('should check close button works', () => {
    
    signInPage.close.click();
    expect(signInPage.signInTab.isDisplayed()).toBe(false);
    
});    

it('should should check facebook button enabled', () => {
    
    expect(signInPage.facebookButton.isEnabled()).toBe(true);
    signInPage.close.click();
    
});
it('should should check google button enabled', () => {
    
    expect(signInPage.googleButton.isEnabled()).toBe(true);
    signInPage.close.click();
    
});
it('should check Create new account link returns signup page', () => {
    
    signInPage.createNewAccountLink.click();
    expect(signInPage.signUpTab.isPresent()).toBe(true);
});




  });
 
  describe('Main Page', () => {
    var expectedText; 
    var EC = protractor.ExpectedConditions; 
beforeEach(() => {
Base.navigateToHome();
element(by.linkText("Sign In")).click();
});
it('should login',()=>{
    signInPage.emailField.sendKeys("softwareengineerintest1@gmail.com");
    signInPage.passwordField.sendKeys("Sdet123.");
    signInPage.logInButton.click();
    browser.wait(EC.visibilityOf(signInPage.signOutButton),30000).then(()=>{
        signInPage.signOutButton.click();
        });
    
    
    
});
it('should test if invalid email or password message appears', () => {
    browser.wait(EC.visibilityOf(signInPage.logInButton),40000).then(()=>{
    signInPage.emailField.sendKeys("softwareengineerintest1@gmail.com");
    
    signInPage.passwordField.sendKeys("Sdet123");
    signInPage.logInButton.click();
    browser.wait(EC.visibilityOf(signInPage.errorMessage),30000).then(()=>{
   
        errorText=signInPage.errorMessage.getText();
        errorText.then((text)=>{
        
        expect(text).toEqual(signInPage.expectedErrorMessage);
        });
        
    });
    });
    
});
        
it('should check close button works', () => {
    browser.wait(EC.visibilityOf(signInPage.close),30000).then(()=>{
    signInPage.close.click();
    });
    browser.sleep(2000);
    expect(signInPage.signInTab.isDisplayed()).toBe(false);
   
});    
it('should should check facebook button enabled', () => {
    browser.wait(EC.visibilityOf(signInPage.close),30000).then(()=>{
    expect(signInPage.facebookButton.isEnabled()).toBe(true);
    signInPage.close.click();
    });
});
it('should should check google button enabled', () => {
    browser.wait(EC.visibilityOf(signInPage.close),30000).then(()=>{
    expect(signInPage.googleButton.isEnabled()).toBe(true);
    signInPage.close.click();
    });
});
it('should check Create new account link returns signup page', () => {
    browser.wait(EC.visibilityOf(signInPage.close),30000).then(()=>{
    signInPage.createNewAccountLink.click();
    expect(signInPage.signUpTab.isPresent()).toBe(true);
    });
});
  });
  
  describe('4stay.com Sign Up page functionality', () => {
      
      beforeAll(() => {
          browser.waitForAngularEnabled(false);
          
      });
      
  
      it('should display Sign Up button', () => {
          Base.navigateToHome();
          expect(SignUpPage.signUpButton.isDisplayed()).toBe(true);
      });
  
      beforeEach(() => {
          browser.waitForAngularEnabled(false);
          Base.navigateToHome();
          SignUpPage.signUpButton.click();
      });
  
      it('should display four elements on first SignUp page', () => {
          expect(SignUpPage.logInButton.isDisplayed()).toBe(true);
          expect(SignUpPage.fourStayLogo.isDisplayed()).toBe(true);
          expect(SignUpPage.continueWithFaceBookButton.isDisplayed()).toBe(true);
          expect(SignUpPage.moreOptionsLink.isDisplayed()).toBe(true);
      });
  
      it('should continue with Facebook Button', () => {
          SignUpPage.continueWithFaceBookButton.click();
          expect(browser.getTitle()).toEqual("Facebook");
      });
  
      it('should continue with more options button', () => {
          SignUpPage.moreOptionsLink.click();
          expect(SignUpMoreOptionsPage.ContinueWithFacebookButton.isDisplayed()).toBe(true);
          expect(SignUpMoreOptionsPage.ContinueWithGoogleButton.isDisplayed()).toBe(true);
          expect(SignUpMoreOptionsPage.ContinueWithEmailButton.isDisplayed()).toBe(true);
      });
  
      it('should verify "Continue with Facebook" and "Continue with Google" links', () => {
          SignUpPage.moreOptionsLink.click();
          SignUpMoreOptionsPage.ContinueWithFacebookButton.click();
          expect(browser.getTitle()).toEqual('Facebook');
          browser.navigate().back();        
          SignUpMoreOptionsPage.ContinueWithGoogleButton.click();
      });
  
      it('should verify "Continue with email button"', () => {
          SignUpPage.moreOptionsLink.click();
          SignUpMoreOptionsPage.ContinueWithEmailButton.click();
          expect(SignUpPage.firstName.isDisplayed()).toBe(true);
          expect(SignUpPage.lastName.isDisplayed()).toBe(true);
          expect(SignUpPage.password.isDisplayed()).toBe(true);
          expect(SignUpPage.pinkSignUpButton.isDisplayed()).toBe(true);
      });
  
      it('should verify first name field', () => {
          SignUpPage.moreOptionsLink.click();
          SignUpMoreOptionsPage.ContinueWithEmailButton.click();
          expect(SignUpPage.firstName.getAttribute('required')).toEqual('true'); 
      });
  
  });
  
  describe('4stay.com list your stay functionality', () => {
    var EC = protractor.ExpectedConditions;
  
      beforeEach(()=>{
          browser.waitForAngularEnabled(false);
  
          // browser.get('https://4stay.com/');
          // ListYourStayPage.navigateToList.click();
          browser.get('https://4stay.com/how-to-become-a-host');
  
      });
  
  
    it('should have correct page title, display logo and search box on top left ', () => {
          expect(browser.getTitle()).toEqual('How to become a host | Room rental, roommate finder, off-campus housing, homestay | 4stay');
  
          expect(ListYourStayPage.logo.isDisplayed()).toBe(true);
  
          expect(ListYourStayPage.searchBox.isDisplayed()).toBe(true);
          expect(ListYourStayPage.searchBox.getAttribute("placeholder")).toEqual('Type your school name');
          expect(ListYourStayPage.saveButton.isEnabled()).toBe(true);        
           
          
        });
  
    it('should display LOG IN, SIGN UP, HELP, LIST YOUR STAY button fields', () => {
  
      expect(ListYourStayPage.loginButton.getText()).toEqual('LOG IN');
      expect(ListYourStayPage.loginButton.isDisplayed()).toBe(true);
  
      expect(ListYourStayPage.signupButton.getText()).toEqual('SIGN UP');
      expect(ListYourStayPage.signupButton.isDisplayed()).toBe(true);
      
      expect(ListYourStayPage.helpButton.getText()).toEqual('HELP');
      expect(ListYourStayPage.helpButton.isDisplayed()).toBe(true);
   
      expect(ListYourStayPage.listYourStayButton.getText()).toEqual('LIST YOUR STAY');
      expect(ListYourStayPage.listYourStayButton.isDisplayed()).toBe(true);
  
    });
  
    it('should display page header and form for signing up', () => {
  
          expect(ListYourStayPage.pageHeader.getText()).toEqual("SIGN UP — IT'S FREE!");
          expect(ListYourStayPage.pageHeader.isDisplayed()).toBe(true);
  
          expect(ListYourStayPage.listYourstayForm.isDisplayed()).toBe(true);
           
        });
  
    it('should display Facebook logo and text and Google logo and text', () => {
         
         expect(ListYourStayPage.facebookLogo.isDisplayed()).toBe(true);
          expect(ListYourStayPage.facebookText.getText()).toEqual('SIGN UP WITH FACEBOOK');
  
          expect(ListYourStayPage.googleLogo.isDisplayed()).toBe(true);
          expect(ListYourStayPage.googleText.getText()).toEqual('SIGN UP WITH GOOGLE');
      });
  
  
    it('should list first name  and last name in the form', () => {
      
      expect(ListYourStayPage.firstName.isDisplayed()).toBe(true);
      expect(ListYourStayPage.firstName.isPresent()).toBe(true);
      expect(ListYourStayPage.firstName.getAttribute("placeholder")).toEqual('First name');
  
      expect(ListYourStayPage.lastName.isDisplayed()).toBe(true);
      expect(ListYourStayPage.lastName.isPresent()).toBe(true);
      expect(ListYourStayPage.lastName.getAttribute("placeholder")).toEqual('Last name');
        
      });
      it('should require first name and last name in the form', () => {
      
        expect(ListYourStayPage.firstName.getAttribute('required')).toEqual('true');
  
        expect(ListYourStayPage.lastName.getAttribute('required')).toEqual('true');
          
      });
  
  
    it('should list email address field in the form', () => {
      expect(ListYourStayPage.email.isDisplayed()).toBe(true);
      expect(ListYourStayPage.email.isPresent()).toBe(true);
      expect(ListYourStayPage.email.getAttribute("placeholder")).toEqual('Email address');
        
    });
  
    it('should require email address and phone number in the form', () => {
      expect(ListYourStayPage.email.getAttribute('required')).toEqual('true');
  
      expect(ListYourStayPage.phone.getAttribute('required')).toEqual('true');
      expect(ListYourStayPage.phone.getAttribute("required")).toBe("true");
        
    });
  
    it('should list password field in the form', () => {
  
      expect(ListYourStayPage.password.isDisplayed()).toBe(true);
      expect(ListYourStayPage.password.isPresent()).toBe(true);
      expect(ListYourStayPage.password.getAttribute("placeholder")).toEqual('Password');
  
    });
  
    it('should list phone number field in the form', () => {
        expect(ListYourStayPage.phone.isDisplayed()).toBe(true);
        expect(ListYourStayPage.phone.isPresent()).toBe(true);
        expect(ListYourStayPage.phone.getAttribute("placeholder")).toEqual('Phone');
  
    });
  
    it('should require password in the form', () => {
        expect(ListYourStayPage.password.getAttribute('required')).toEqual('true');
          
    });
  
    it('should display checkbox field in the form', () => {
  
      expect(ListYourStayPage.checkbox.isEnabled()).toBe(true);
  
      expect(ListYourStayPage.checkboxText.getText()).toEqual('I accept the 4stay.com');
      expect(ListYourStayPage.accept.isPresent()).toBe(true);
      expect(ListYourStayPage.accept.isDisplayed()).toBe(true);
  
      expect(ListYourStayPage.termsAndconditions.isDisplayed()).toBe(true);
      expect(ListYourStayPage.termsAndconditions.isPresent()).toBe(true);
      expect(ListYourStayPage.termsAndconditions.getText()).toEqual('Terms and Conditions');
      expect(ListYourStayPage.termsAndconditionsTag.getTagName()).toBe('a');
    
    });
  
   
    it('should require "I accept the 4stay.comTerms and Conditions"', () => {
      expect(ListYourStayPage.checkbox.getAttribute('required')).toEqual('true');
    });
  
  
    it('should display create account button in the form', () => {
  
      expect(ListYourStayPage.createAccount.isDisplayed()).toBe(true);
      expect(ListYourStayPage.createAccount.isPresent()).toBe(true);
      expect(ListYourStayPage.createAccount.isEnabled()).toBe(true);
  
    });
  
    it('should display Already have an account? Login here! link in the form', () => {
  
      expect(ListYourStayPage.alreadyHaveAccountLink.isDisplayed()).toBe(true);
      expect(ListYourStayPage.alreadyHaveAccountLink.isPresent()).toBe(true);
      expect(ListYourStayPage.alreadyHaveAccountLink.isEnabled()).toBe(true);
      expect(ListYourStayPage.alreadyHaveAccountLink.getText()).toEqual("Already have an account? Login here!");
      expect(ListYourStayPage.alreadyHaveAccountLinkTag.getTagName()).toBe('a');
        
    });
  
  
    it('should navigate to facebook.com when clicked on SIGN UP WITH FACEBOOK button', () => {
          
      ListYourStayPage.facebookLogo.click();
      expect(browser.getTitle()).toEqual('Facebook');
  
    });
  
  
    it('should navigate to google.com when clicked on SIGN UP WITH GOOGLE button', () => {        
          ListYourStayPage.googleLogo.click();
          browser.wait(EC.visibilityOf($('div.Fmgc2c')),3000)
          .then(function(){
            expect(browser.getTitle()).toEqual('Sign in - Google Accounts');
          });
    });
  
  
  
    it('should navigate to LOG IN page when clicked on Already have an account? Login here! button', () => {
      ListYourStayPage.alreadyHaveAccountLink.click();    
      expect(ListYourStayPage.loginPage.isDisplayed()).toBe('true');
      ListYourStayPage.loginPage.click();
      
    });
  
    it('should create an account / display a stay', () => {
      var phone = '1346402';
      var email = '';
      for (var i=1;i<5;i++){
        var e = Math.floor((Math.random() * 9) + 1);
        email+=e;
        phone+=e;
        
      }    
      ListYourStayPage.firstName.sendKeys('Mike');
      ListYourStayPage.lastName.sendKeys('Smith');
      ListYourStayPage.email.sendKeys(`mike${email}@gmail.com`);
      ListYourStayPage.password.sendKeys('mike123');    
      ListYourStayPage.phone.sendKeys(phone);
      ListYourStayPage.checkbox.click();  
      ListYourStayPage.createAccount.click();
  
      browser.wait(EC.visibilityOf($(".btn-primary")),30000)
          .then(function(){ 
            ListYourStayPage.occupation.sendKeys('Teacher');
            ListYourStayPage.phonefield.clear();
            ListYourStayPage.flag.click();
            ListYourStayPage.country.click();     
            ListYourStayPage.phonefield.sendKeys(phone);
            ListYourStayPage.aboutMe.sendKeys('I like reading.');
            ListYourStayPage.dateOfBirth.sendKeys('1980');        
            ListYourStayPage.saveButton.click();
  
            browser.wait(EC.visibilityOf(ListYourStayPage.phoneVerificationCode),5000)
          .then(function(){ 
            expect(ListYourStayPage.phoneVerificationCode.isDisplayed()).toBe(true);
  
          });
  
          });
    });
  
  
  
    it('first and last name must not be numeric', () => {
      var phone = '+1346401';
      var email = '';
      for (var i=1;i<5;i++){
        var e = Math.floor((Math.random() * 10) + 1);
        email+=e;
        phone+=e;
      }  
      ListYourStayPage.firstName.sendKeys(phone);
      ListYourStayPage.lastName.sendKeys(phone);
      ListYourStayPage.email.sendKeys(`${email}A@gmail.com`);
      ListYourStayPage.password.sendKeys(`${phone}${email}`);    
      ListYourStayPage.phone.sendKeys(`${phone}`);
      ListYourStayPage.checkbox.click();  
      ListYourStayPage.createAccount.click();
      browser.wait(EC.visibilityOf(ListYourStayPage.saveButton),5000)
      .then(function(){ 
      expect(ListYourStayPage.occupation.isDisplayed()).toBe(false);
    });
    });
  
    it('phone number must not contains characters', () => {
      var phone = '+1346401';
      var email = '';
      for (var i=1;i<5;i++){
        var e = Math.floor((Math.random() * 10) + 1);
        email+=e;
        phone+=e;
      }  
      ListYourStayPage.firstName.sendKeys(333);
      ListYourStayPage.lastName.sendKeys('444');
      ListYourStayPage.email.sendKeys(`mike${email}@gmail.com`);
      ListYourStayPage.password.sendKeys('mike123');    
      ListYourStayPage.phone.sendKeys("abcdfesf"+phone);
      ListYourStayPage.checkbox.click();  
      ListYourStayPage.createAccount.click();
      browser.wait(EC.visibilityOf(ListYourStayPage.saveButton),5000)
      .then(function(){ 
      expect(ListYourStayPage.occupation.isDisplayed()).toBe(false);
    });
    });
  
  });

  describe('Name of the group', () => {
    var browserHandles=[];
    var EC = protractor.ExpectedConditions;

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://4stay.com/');

    });

    it('should display "About us" link at very end of home page', () => {
        homepageLinks.scrolldownToEnd.then( () => {
            browser.sleep(2000);
            expect(homepageLinks.aboutUsLink.isDisplayed()).toBe(true);
        });
    });
    it('should click "About us" link and get text from that page', () => {
        homepageLinks.scrolldownToEnd
        homepageLinks.aboutUsLink.click()
        .then( () => {
        expect(homepageLinks.aboutUsPageText.getText()).toEqual('Who are we?')
        })
    });

    it('should click "Contact us" link at very end of home page and navigate to that page', () => {
        homepageLinks.scrolldownToEnd;
        homepageLinks.contactUsLink.click().then( () => {
            expect(feedbackPage.feedbackForm.isDisplayed()).toBe(true);
        })
    });

    it('should require name, email, message in order to send message', () => {
        homepageLinks.scrolldownToEnd;
        homepageLinks.contactUsLink.click();
        expect(feedbackPage.nameField.getAttribute('required')).toEqual('true');
        expect(feedbackPage.emailField.getAttribute('required')).toEqual('true');
        expect(feedbackPage.messageField.getAttribute('required')).toEqual('true');
  
    });

    it('should valid email, name and message before send message and it should fail, because we passing negative test data', () => {
            homepageLinks.contactUsLink.click();
            feedbackPage.nameField.sendKeys(feedbackData.feedbackNegativeTestData.fname);
            feedbackPage.emailField.sendKeys(feedbackData.feedbackNegativeTestData.email);
            feedbackPage.messageField.sendKeys(feedbackData.feedbackNegativeTestData.messageText);
            browser.sleep(2000);
            feedbackPage.sendMessageButton.click();
            browser.sleep(4000);
            expect(feedbackPage.confirmMessage.getText()).toContain("Thanks for your feedback!");
        });
    
    it('a. should click "Help" link at very end of home page and navigate to that page and switch to new window. b. Should search how to become a host', () => {
            homepageLinks.scrolldownToEnd;
            homepageLinks.helpLink.click();
            browser.getAllWindowHandles().then(function(handles){
                browserHandles=handles;
                browser.switchTo().window(browserHandles[1]).then(function(){
                    browser.sleep(2000);
                    homepageLinks.askHelp.sendKeys("Become a Host");
                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
                    browser.sleep(2000);
                });
            });
        });

  });
  describe('Test Case', function() {
    let browserHandles = [];
    let EC = protractor.ExpectedConditions;


    it('should navigate the website 4stay.com ', function () {
        browser.ignoreSynchronization=true;
        browser.get("https://4stay.com/");
        expect(browser.getCurrentUrl()).toEqual("https://4stay.com/")

    });

    it('should nagivate new Tab ', function () {
        element.all(by.css('.btn.btn-view-more')).get(2).click();
        browser.getAllWindowHandles().then(function (handles) {
            browserHandles = handles;
            browser.switchTo().window(browserHandles[1]).then(function (){

                expect(browser.getCurrentUrl()).toContain("https://4stay.com/advanced_search");
            });

    });
    });


    it('should search Oxford University ', function () {

        //var input=element.all(by.model('poi.title')).get(0);
        let input = element(by.css('#advancedSearchApp>header>div>div:nth-child(2)>div>div>input'));
        browser.actions().mouseMove(input).click().sendKeys("Oxford University").perform().then(function () {
            browser.sleep(5000);
            input.sendKeys(protractor.Key.ARROW_DOWN);
            browser.sleep(3000);
            input.sendKeys(protractor.Key.ARROW_DOWN);
            browser.sleep(3000);

            input.sendKeys(protractor.Key.ENTER);




        });

    });


    it('should filter Room Options', function () {

        element(by.css('.dropdown-control.room-type')).click();
        browser.sleep(5000);

                let button=element(by.cssContainingText('.radio-button.clearfix label#whole_unit_radio', 'Entire Home'));
                let isClickable = EC.elementToBeClickable(button);
                browser.wait(isClickable, 10000);
                browser.actions().mouseMove(button).click().perform();
                //let applyButton=element(by.buttonText('Apply'));
        //let isClickableApply = EC.elementToBeClickable(applyButton);
                //browser.wait(isClickableApply, 10000);
                //applyButton.click();
                //browser.sleep(10000);
        browser.sleep(5000);
        element(by.css('.dropdown-control.room-type')).click();
        browser.sleep(5000);

            });

    it('should filter Bath Options', function () {

        element(by.css('.dropdown-control.bath-type')).click();
        browser.sleep(5000);
        let button=element(by.cssContainingText('.radio-button.clearfix label.shared-bath', 'Shared Bath'));
        let isClickableApply = EC.elementToBeClickable(button);
        browser.wait(isClickableApply, 10000);
        browser.actions().mouseMove(button).click().perform();
        browser.sleep(5000);

        element(by.css('.dropdown-control.bath-type')).click();
        browser.sleep(5000);

    });

    it('should filter price', function () {

        let priceButton=element(by.css('.dropdown-control.price'));
        priceButton.click();
        browser.sleep(5000);

        let slider=element(by.css(".dropdown-control.price .irs-bar"));
        browser.driver.actions().dragAndDrop(slider,{x:100,y:0}).perform();
        browser.sleep(4000);
        priceButton.click();
        browser.sleep(5000);

    });

    it('should filter distance', function () {

        //let distanceButton=element(by.css('.dropdown-control.distance'));
        let distanceButton=element(by.css('.dropdown-value.distance.ng-binding'));
         distanceButton.click();
        browser.sleep(5000);
          let distanceSlider=element(by.css(".dropdown-area.distance-slide.visible .irs-slider.single"));
        browser.driver.actions().dragAndDrop(distanceSlider,{x:100,y:0}).perform();
        browser.sleep(4000);

        let isClickable = EC.elementToBeClickable(distanceButton);
        browser.wait(isClickable, 10000);
        distanceButton.click();
        browser.sleep(5000);

    });


    it('should filter More Option', function () {

        let filterButton=element(by.css('.dropdown-control.more-filters')).click();
        let isClickable = EC.elementToBeClickable(filterButton);
        browser.wait(isClickable, 10000);
        element.all(by.model('search.gender_type')).get(1).click();
        element(by.model('search.is_homestay')).click();
        element(by.model("search.homestay['vegeterian']")).click();
        element.all(by.model('search.rules[rule]')).get(3).click();
        element.all(by.model('search.rules[amenity]')).get(2).click();
        browser.sleep(5000);
        element(by.css(".btn.apply-filter-btn")).click();
        browser.sleep(3000);


    });

  });
  describe('4Stay Search Functionality', () => {
            var EC= protractor.ExpectedConditions;
            var  browserHandles=[];
            beforeEach(function(){
                    browser.ignoreSynchronization=true;
                    browser.get('https://4stay.com/');
                });
            it('should check if main & second search boxes are displayed',() =>{
                    expect(SearchFunctionalityPage.MainSearchBox.isDisplayed()).toBe(true);
                    browser.executeScript("arguments[0].scrollIntoView();",SearchFunctionalityPage.SecondSearchBox);
                    expect(SearchFunctionalityPage.SecondSearchBox.isDisplayed()).toBe(true);
                    
            });
            
            it('it should verify placeholder texts in both search boxes ',() =>{
                expect(SearchFunctionalityPage.MainSearchBox.getAttribute('placeholder')).toEqual(data4stay.appData.MainSearchBoxPlaceHolder);
                browser.executeScript("arguments[0].scrollIntoView();",SearchFunctionalityPage.SecondSearchBox);
                expect(SearchFunctionalityPage.SecondSearchBox.getAttribute('placeholder')).toEqual(data4stay.appData.SecondSearchBoxPlaceHolder);    
               
        
            });
        
            it('should check the cities in the shortcut to the search page list', () => {
                browser.executeScript("arguments[0].scrollIntoView();",$$('.row.justify-content-around.mt-5>div h4').first());
                expect($$('.row.justify-content-around.mt-5>div h4').getText().then((text)=>{
                return text}))
            .toEqual([ 'WASHINGTON D.C.',
          'NEW YORK',
          'SAN-FRANCISCO',
          'BOSTON',
          'LOS-ANGELES',
          'BALTIMORE',
          'CHICAGO',
          'SEATTLE',
          'HOUSTON' ]);
            });
            it('(NEGATIVE)Main search box should not search without chosing places from dropdown list even if you hit enter ', () => {
                SearchFunctionalityPage.MainSearchBox.sendKeys(data4stay.places.city1);
                SearchFunctionalityPage.MainSearchBox.sendKeys(protractor.Key.ENTER);
                expect(SearchFunctionalityPage.MainSearchBox.isDisplayed()).toBe(true);
            });
            
            it('(NEGATIVE)Second search box should not search without chosing places from dropdown list even if you hit enter ', () => {
                browser.executeScript("arguments[0].scrollIntoView();",SearchFunctionalityPage.SecondSearchBox);
                SearchFunctionalityPage.SecondSearchBox.sendKeys(data4stay.places.city2);
                SearchFunctionalityPage.SecondSearchBox.sendKeys(protractor.Key.ENTER);
                expect(SearchFunctionalityPage.SecondSearchBox.isDisplayed()).toBe(true);
            });
        
            it('main search box should search after selecting place with down arrow and hit enter', () => {
                  
                    
                browser.actions().mouseMove(SearchFunctionalityPage.MainSearchBox).click().sendKeys(data4stay.places.city1).perform().then(function () {
                    browser.sleep(3000);
                    SearchFunctionalityPage.MainSearchBox.sendKeys(protractor.Key.ARROW_DOWN).then(function () {
                    browser.sleep(3000);
                    SearchFunctionalityPage.MainSearchBox.sendKeys(protractor.Key.ENTER).then(function () {
                    browser.sleep(3000);
                        
                    expect(browser.getCurrentUrl()).toContain("https://4stay.com/advanced_search");
                                   
                            });
            
                        });
            
                    });
             });
             it('Second search box should search after selecting place with down arrow and hit enter', () => {
                  
                    
                browser.actions().mouseMove(SearchFunctionalityPage.SecondSearchBox).click().sendKeys(data4stay.places.city2).perform().then(function () {
                    browser.sleep(3000);
                    SearchFunctionalityPage.SecondSearchBox.sendKeys(protractor.Key.ARROW_DOWN).then(function () {
                    browser.sleep(3000);
                    SearchFunctionalityPage.SecondSearchBox.sendKeys(protractor.Key.ENTER).then(function () {
                    browser.sleep(3000);
                        
                    expect(browser.getCurrentUrl()).toContain("https://4stay.com/advanced_search");
                                   
                            });
            
                        });
            
                    });
             });
             
        
            it('should scroll down and check second view more button if it isEnabled', () => {
                browser.executeScript("arguments[0].scrollIntoView();",$$('.btn.btn-view-more').get(1));
                expect($$('.btn.btn-view-more').get(1).isEnabled()).toBe(true);
                browser.sleep(2000);
            });
            it('should scroll down and click on Washington DC city and navigate to second Tab', () => {
                browser.executeScript("arguments[0].scrollIntoView();",$('.col-md-4'));
                browser.sleep(2000);
                $('.col-md-4').click();
                browser.getAllWindowHandles().then(function (handles) {
                    browserHandles = handles;
                    browser.switchTo().window(browserHandles[1]).then(function (){
        
                        expect(browser.getCurrentUrl()).toContain("https://4stay.com/advanced_search");
                    });
        
            });
            });
        
            
                    
        
  });
});
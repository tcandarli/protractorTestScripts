require('../Utilities/CustomLocators.js');
var SignUpPage = require('../Pages/SignUpPage.page.js');
var Base = require('../Utilities/Base.js');
var SignUpMoreOptionsPage = require('../Pages/SignUpMoreOptionsPage.page.js')

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
        // SignUpPage.firstName.sendKeys('John');        
    });

});
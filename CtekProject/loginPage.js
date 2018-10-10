/**********************************
 * •http://www.way2automation.com/angularjs-protractor/registeration/#/login (Links to an external site.)Links to an external site.
•Check everything on the page have been displayed correctly
•Click Username field, click password and check error message changed its color
•Enter 1 character to username, check if the error message been displayed
•Enter 2 more characters, check error message disappeared
•Send Enter from the keyboard everytimeyou filled a field and check
•Check the button enabled.
•Check if error message displayed
 * 
 */

describe('Login page test', () => {

    it('Should check everything on the page have displayed', () => {
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        element(by.id("username")).isDisplayed().then((result) => {
            if (result == true) {
                console.log(`username input box element is displayed correctly.`);
            } else {
                console.log(`Username input box is not displayed!`)
            }
        });
        element(by.id("password")).isDisplayed().then((result) => {
            if (result == true) {
                console.log(`password input box element is displayed correctly.`);
            } else {
                console.log(`password input box is not displayed!`)
            }
        });
        element(by.id("formly_1_input_username_0")).isDisplayed().then((result) => {
            if (result == true) {
                console.log(`2nd username input box element is displayed correctly.`);
            } else {
                console.log(`2nd username input box is not displayed!`)
            }
        });

        $(".form-group div>div").getCssValue('color').then(function(color) {
            console.log(`Username message color is : ${color}`);
        });

        $(".form-group div>div").getCssValue('color').then(function(color) {
            console.log(`Password message color is : ${color}`);
        })

        // Click Username field, click password and check error message changed its color
        $("#username").click();
        $("#password").click();
        $("#formly_1_input_username_0").click();
        browser.sleep(3000);
        $(".form-group.has-error div>div").getCssValue('color').then(function(color) {
            console.log(`Username error message color is : ${color}`);
        });

        $(".form-group.has-error div>div").getCssValue('color').then(function(color) {
            console.log(`Password error message color is : ${color}`);
        });
    });

});
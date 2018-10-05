describe('Interacting Elements Suite', () => {
    it('isPresent Method', () => {
        browser.get('https://www.bhtp.com/');

        // isPresent()
        element(by.id("cta-button")).isPresent().then(function (result) {
            if (result == true) {
                console.log("Get Quote Button Test Passed");
            } else {
                console.log("Get Quote Button Test Failed")
            }
        });

        // isDisplayed() 
        element(by.id("cta-button")).isDisplayed().then(function (result) {
            if (result == true) {
                console.log("Get Quote Button Displayed Correctly.");
            } else {
                console.log("I can not see the button. Test Failed!")
            }
        });

    });

    fit('isDisplayed Method on amazon.com', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.amazon.com/');
        browser.sleep(2000);

        element(by.id("nav-logo")).isDisplayed().then(function (result) {
            if (result == true) {
                console.log("Amazon Logo Displayed Correctly.");
            } else {
                console.log("I can not see the Amazon Logo. Test Failed!")
            }
        });
    });


});
describe('Dropdowns', () => {

    // Printing all options in dropdown
    it('ng-options', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');
        var allOptions = element.all(by.options('value for (key, value) in operators'));

        allOptions.each(function (option) {
            option.getText().then(function (optionText) {
                console.log(optionText);
            });
        });

        // Print one option
        var thirdOption = allOptions.get(2);
        thirdOption.getText().then(function (optionText) {
            console.log(optionText);
        });

    });

    it("ng-options skout", () => {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.skout.com");
        //getting all elements from dropdown
        element.all(by.model("user.birthday.month")).first()
            .all(by.tagName("option")).getText().then(function (txt) {
                console.log(txt);
            });
        //select item with cssContainingText method
        element.all(by.model("user.birthday.month")).first()
            .all(by.cssContainingText('option', 'May')).click();
        browser.sleep(3000)
        //Select element by text
        element(by.model("user.birthday.month"))
            .element(by.xpath('option[.="April"]')).click();
        browser.sleep(3000);
        //select element by its value
        element(by.model("user.birthday.month"))
            .element(by.css('option[value="7"]')).click();
        browser.sleep(3000);
    });

    fit("ng-options skout", () => {
        browser.waitForAngularEnabled(false);

        browser.get("https://www.skout.com");
        //getting all elements from a dropdown print it
        element.all(by.id("birthday-month")).first()  // Finding the dropdown
            .all(by.tagName('option'))
                .getText().then(function (textArray) {
                    console.log(textArray);
            });
    });

});
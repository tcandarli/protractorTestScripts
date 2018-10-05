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

});
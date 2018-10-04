describe('each Method Examples', () => {
    it('each method #1', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.bhtp.com/');
        browser.sleep(3000);

        $('#top-nav-down').all(by.tagName("span")).each(function (item) {
            item.getText().then(function (text) {
                console.log(text);
            });
        });
    });

    it('Print each item on header of bbc.com - then print only Shop', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://bbc.com');
        browser.manage().window().setSize(1800, 2000);
        element(by.css("#orb-nav-links"))
            .all(by.tagName("a")) // returns an array with all the li inside.
            .each(function (item, index) { // creates a loop inside the array.
                item.getText()
                    .then(function (textArray) {
                        console.log("#" + index + " : " + textArray);
                    });
            });
    });

    it('by.binding method', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('5');
        browser.sleep(3000);
        element(by.model('second')).sendKeys('6');
        browser.sleep(3000);
        element(by.id('gobutton')).click();
        browser.sleep(1000);
        element(by.binding('latest')).getText().then(function (result) {
            if (result == 11) {
                console.log(result);
                console.log("Passed");
            }
        })
    })

    fit('by.repeater', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('6');
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys('7');
        element(by.model('second')).sendKeys('7');
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys('55');
        element(by.model('second')).sendKeys('66');
        element(by.id('gobutton')).click();

        browser.sleep(4000);

        element.all(by.repeater("result in memory")).each(function (item) {
            item.getText().then(function (rowData) {
                console.log(rowData);
            })
        })
    });


});
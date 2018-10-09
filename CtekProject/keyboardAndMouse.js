describe('Keyboard and Mouse Action Suite', () => {
    // First write something on inputbox and clear what you've written
    // and write something new

    it('clear method', () => {

        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        element(by.id("username")).sendKeys('Cybertek');
        browser.sleep(3000);
        element(by.id("username")).clear();
        browser.sleep(3000);
        element(by.id("username")).sendKeys('angular');
        browser.sleep(3000);

    });

    //sendKeys protractor.Key Example
    it('using Keyboard buttons ', () => {
        browser.get("https://flow.microsoft.com/en-us/");
        element(by.css(".c-search.homepage-search.ng-pristine.ng-valid>input")).sendKeys('dropboxb');
        browser.sleep(5000);
        element(by.css(".c-search.homepage-search.ng-pristine.ng-valid>input"))
            .sendKeys(protractor.Key.BACK_SPACE)
            .sendKeys(protractor.Key.ENTER)
        browser.sleep(6000);
    });

    // getAttribute Microsoft
    it('getAttribute method usage', () => {
        browser.get("https://flow.microsoft.com/en-us/");
        $('.ms-logo').getAttribute('title').then(function (titleAttribute) {
            console.log(titleAttribute);
        });
    });

    // getAttribute staples.com
    it('getAttribute method', () => {

        browser.waitForAngularEnabled(false);
        browser.get("https://www.staples.com");
        $('#staples-logo-hdr').getAttribute('title').then(function (titleAttribute) {
            console.log(`Logo attribute is ${titleAttribute}`);
        });
    });

    // 
    it('getCssValue method usage', () => {
        browser.get("https://flow.microsoft.com/en-us/");
        // extracts color value from CSS
        element(by.id("home-video-button")).getCssValue('color').then(function (text) {
            console.log(`Color css value is ${text}`);
        })

        // extracts font size value from CSS
        element(by.id("home-video-button")).getCssValue('font-size').then(function (text) {
            console.log(`Font size css value is ${text}`);
        })
    });

    // getCssValue staples.com
    it('getCssValue method', () => {

        browser.waitForAngularEnabled(false);
        browser.get("https://www.staples.com");
        $('.section-icon.cart').getCssValue('color').then(function (colorValue) {
            console.log(`css color value is ${colorValue}`);
        });
    });

    // getLocation method on Microsoft
    it('getLocation method usage', () => {
        browser.get("https://flow.microsoft.com/en-us/");

        element(by.id("home-video-button")).getLocation().then(function (location) {
            var x = location.x;
            var y = location.y;

            console.log(x + '-------' + y);
        });
    });

    it('getLocation method @bhtp.com', () => {
        browser.get("https://www.bhtp.com");
        browser.sleep(2000);
        element(by.linkText('START A CLAIM')).getLocation().then(function (locationValue) {
            let x = locationValue.x;
            let y = locationValue.y;
            console.log(x + '-------' + y);
        });
    });

    // Mouse actions
    it('Mouse Hover over example', () => {
        browser.waitForAngularEnabled(false);
        browser.sleep(2000);
        browser.get('https://the-internet.herokuapp.com/');
        element(by.linkText('Hovers')).click();
        browser.sleep(2000);
        browser.actions().mouseMove($('.figure>img')).perform();
        browser.sleep(3000);
        element(by.linkText('View profile')).click();
        browser.sleep(4000);
    });

    // 
    it('Mouse Hover over third one', () => {
        browser.waitForAngularEnabled(false);
        browser.sleep(2000);
        browser.get('https://the-internet.herokuapp.com/');
        element(by.linkText('Hovers')).click();
        browser.sleep(2000);
        browser.actions().mouseMove($$('.figure>img').get(2)).perform();
        browser.sleep(3000);
        element(by.linkText('View profile')).click();
        // Without hovering the element is not available!
        browser.sleep(2000);
    });

    // 3rd party drag and drop solution
    fit('Drag and drop method', () => {
        var dragAndDrop = require('html-dnd').code;

        browser.waitForAngularEnabled(false);
        browser.get('https://the-internet.herokuapp.com/drag_and_drop');
        browser.sleep(3000);
        // drags first element and drops to second element
        browser.executeScript(dragAndDrop, element(by.id('column-a')), element(by.id('column-b')), 0, 0);
        browser.sleep(5000);
    });
});
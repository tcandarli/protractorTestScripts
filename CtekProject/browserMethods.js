describe('Browser Method Suite', function () {

    it('Browser get method', function () {

        // for non-angular websites we use this keyword
        // browser.ignoreSynchronization = true;

        // non-angular websites 2nd keyword
        // browser.waitForAngularEnabled(false);
        
        // opening a webpage with the URL
        browser.get('https://www.google.com');
        browser.sleep(4000);
        
    });

});
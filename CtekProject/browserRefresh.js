describe('Browser Method Suite', function () {


    it('Browser refresh method', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://www.bbc.com/');
        browser.sleep(4000);
        browser.refresh();
        browser.sleep(4000);

    });

});
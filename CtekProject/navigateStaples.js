describe('Browser Get Method', function () {

    it('Navigate staples.com', function () {
        
        // browser.ignoreSynchronization = true;
        browser.get('https://www.staples.com');
        browser.sleep(3000);
    });

});
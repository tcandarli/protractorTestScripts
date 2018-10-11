describe('Testing Alerts', () => {

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://the-internet.herokuapp.com/');
        element(by.linkText('JavaScript Alerts')).click();
    });

    it('should get text of alert', () => {
        element(by.buttonText('Click for JS Alert')).click();
        browser.sleep(4000);
        expect(browser.switchTo().alert().getText()).toEqual('I am a JS Alert');
    });

    it('should click OK button', () => {
        var myAlert = browser.switchTo().alert();
        myAlert.accept();
        expect(element(by.id('result')).getText()).toEqual('You successfuly clicked an alert');
    });

    it('should dismiss the alert', () => {
        element(by.buttonText('Click for JS Confirm')).click();
        browser.sleep(3000);
        myAlert = browser.switchTo().alert();
        expect(myAlert.getText()).toEqual('I am a JS Confirm');
        browser.sleep(2000);
        myAlert.dismiss();
        expect(element(by.id('result')).getText()).toEqual('You clicked: Cancel');
    });

    it('should accept the alert', () => {
        element(by.buttonText('Click for JS Confirm')).click();
        browser.sleep(3000);
        myAlert = browser.switchTo().alert();
        expect(myAlert.getText()).toEqual('I am a JS Confirm');
        browser.sleep(2000);
        myAlert.accept();
        expect(element(by.id('result')).getText()).toEqual('You clicked: Ok');
    });

    it('should send some text to alert', () => {
        element(by.buttonText('Click for JS Prompt')).click();
        browser.sleep(3000);
        myAlert = browser.switchTo().alert();
        expect(myAlert.getText()).toEqual('I am a JS prompt');
        text = 'Cyberstars';
        myAlert.sendKeys(text);
        myAlert.accept();
        browser.sleep(3000);
        expect(element(by.id('result')).getText()).toEqual('You entered: ' + text);
        browser.sleep(2000);

    });

});
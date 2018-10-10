describe('Validating the Calculator app', () => {

    var expectedText;

    beforeEach(function(){
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
    });
    
    afterEach(function(){
        browser.sleep(3);
        console.log('This is printing after it block');
    });
    
        it('validate 7 + 7 = 14', () => {      
            element(by.model("first")).sendKeys(7);
            element(by.model('second')).sendKeys(7);
            element(by.buttonText('Go!')).click();
            expectedText= element(by.binding('latest')).getText();
              expectedText.then(function(text){
                expect(parseInt(text)).toBe(14);
              });
        });

        it('validate 7+7 !=10',function(){
            element(by.model("first")).sendKeys(7);
            element(by.model('second')).sendKeys(7);
            element(by.buttonText('Go!')).click();
            expectedText= element(by.binding('latest')).getText();
              expectedText.then(function(text){
                expect(parseInt(text)).not.toBe(10);
              });
        });



        it('validate 7+7 =14',function(){
            element(by.model("first")).sendKeys(7);
            element(by.model('second')).sendKeys(7);
            element(by.buttonText('Go!')).click();
            expectedText= element(by.binding('latest')).getText();
              expectedText.then(function(text){
                expect(parseInt(text)).toBe(12);
              });
        });


    });
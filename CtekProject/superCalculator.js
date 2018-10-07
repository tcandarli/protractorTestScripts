/****************************************************
 * Go to http://juliemr.github.io/protractor-demo/
 * Write a function about calculation not only addition
 * Function should accept 3 parameters and will do the calculation
 * first number, second number and operator
 * Then do some calculation 10 times with all the operators.
 * Print result column on the screen
 * Then sum all the numbers on result column
 */

describe('superCalculator test cases', () => {

    let operator = ['+', '/', '%', '*', '-'];
    let calculationTotal = 0;

    function calculation(num1, num2, sign) {
        let operator = element(by.model('operator'));
        element(by.model('first')).sendKeys(num1);
        element(by.model('second')).sendKeys(num2);
        if (sign === "+") {
            operator.$('option:nth-child(1)').click();
        } else if (sign === "/") {
            operator.$('option:nth-child(2)').click();
        } else if (sign === "%") {
            operator.$('option:nth-child(3)').click();
        } else if (sign === "*") {
            operator.$('option:nth-child(4)').click();
        } else if (sign === "-") {
            operator.$('option:nth-child(5)').click();
        }
        element(by.id('gobutton')).click();
        browser.sleep(5000);
    }

    // Calculate 10 times with random numbers and random operators
    fit('multiple calculations 10 times', () => {
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.sleep(2000);

        for (let i = 0; i < 10; i++) {
            let num1 = Math.round((Math.random() * 200) + 1);
            let num2 = Math.round((Math.random() * 200) + 1);
            let i = Math.round((Math.random() * 4) + 0);
            calculation(num1, num2, operator[i])
        }
        browser.sleep(25000);

        // Sum of all calculation results
        $$("tr[class='ng-scope'] > td:nth-child(3)").each((element, index) => {
            element.getText().then((result) => {
                result = Math.round(Number(result));
                calculationTotal += result;
                console.log(`${index+1}. result is ${result}, Total is ${calculationTotal}`);
            });
        });
    });
});
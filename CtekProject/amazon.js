/************************************
 *  Test scripts on amazon.com
 * 1.  Navigate to amazon.com incognito mode
 * 2. Verify the title (Expected value: Amazon.com: Online Shopping for Electronics, Apparel,
 * Computers, Books, DVDs & more) Print the title and If actual result is the same as
 * expected result print “Title successfully displayed” otherwise print “Test Failed”
 * 3. Verify the URL (Expected value: https://www.amazon.com/). Print the url and compare
 * expected result is the same with actual result. If success print url test passed
 * 4. Verify Amazon prime logo exists. If it is displayed print “Logo successfully displayed”
 * otherwise print “Test Failed”.
 * 5. Search the term laptop
 * 6. Get the number of results and if it is more than 300;
 * a. Print the number of search results and print “Wow there are more than 300 but
 * less than 1000”
 * b. If there are more than 1000 less than 10000 then print “There are more than
 * 1000 but less than 10000
 * c. Otherwise print only the result amount.
 * 7. Fetch the categories and put them on an array one by one. Compare this array with
 * expected result which is
 * a. expectedArray = [Electronics, Computers & Accessories, Computers & Tablets,
 * Laptops]
 * 8. Verify the Laptop Display Size checkboxes at the left. Count and print them one by one.
 * 9. Click 15 to 15.9 inches checkbox
 * 10. Write minimum and maximum amounts
 * 11. Check the results again. 
 */

describe('Test cases on amazon website ', () => {

    it('should open amazon.com', () => {
        browser.waitForAngularEnabled(false);

        // 1. test case
        browser.get('https://www.amazon.com/');

        // 2. test case
        browser.getTitle().then(function (title) {
            console.log(title);
            if (title == "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more") {
                console.log(`Title succesfully displayed.`);
            } else {
                console.log(`Test failed!`);
            }
        });

        // 3. test case
        browser.getCurrentUrl().then(function (url) {
            console.log(`Url is ${url}`);
            if (url == "https://www.amazon.com/") {
                console.log(`Url test passed.`)
            } else {
                console.log(`Url test failed!`)
            }
        });
        // 4. test case, verify Amazon prime logo exists. 
        $("span[class = 'nav-sprite nav-logo-base']").isDisplayed().then(function (result) {
            if (result == true) {
                console.log(`Logo successfully displayed`);
            } else {
                console.log(`Test failed!`);
            }
        });

        // 5. Search the term "laptop"
        $("#twotabsearchtextbox").sendKeys('laptop');
        $("[value = 'Go']").click();
        browser.sleep(2000);

        // 6. Get the number of results and if it is more than 300;

        $('div > #s-result-count').getText().then(function (text) {
            console.log(`Result text is ${text}`);
            let t = text.split(" ");
            let quantity = t[t.indexOf("results") - 1];
            console.log(`Result quantity is ${quantity}`);

            if (quantity > 300 && quantity < 1000) {
                console.log(`Wow there are more than 300 but less than 1000`);
            } else if (quantity >= 1000 && quantity < 10000) {
                console.log(`There are more than 1000 but less than 10000`);
            } else {
                console.log(`Result is ${quantity}`)
            }
        });

        // 7. Fetch the categories and put them on an array one by one. Compare this array with
        // expected result which is

        let array = [];
        $$('.a-link-normal.a-color-base.a-text-bold.a-text-normal').getText().then((text) => {

            console.log(`${text}`);
            for (let i of text) {
                array.push(i);
            }

        });

        // 8. Verify the Laptop Display Size checkboxes at the left. Count and print them one by one.

        $$("[id='leftNavContainer']>ul:nth-child(12) li").getText().then(function (size) {
            for (let i of size) {
                console.log(i);
            }
        });
        // 9. Click 15 to 15.9 inches checkbox
        $$("[id='leftNavContainer']>ul:nth-child(12) li").get(2).click();
        browser.sleep(2000);

        // 10. Write minimum and maximum amounts
        $('@low-price').sendKeys(400);
        $('@high-price').sendKeys(700);
        browser.sleep(2000);
        $(".a-button.a-spacing-top-mini.s-small-margin-let input").click();
        browser.sleep(2000);

        //  * 11. Check the results again. 
        $('#s-result-count').getText().then(function (result) {
            console.log(result);
        });
    });
});
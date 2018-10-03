describe('All Method Examples', () => {

    it('element.all grab all the links in Google.com', () => {
        browser.waitForAngularEnabled(false);

        browser.get('https://www.google.com');

        element.all(by.tagName("a")).getText().then(function (textArray) {

            console.log(textArray);

            for (let i = 0; i < textArray.length; i++) {
                console.log(textArray[i]);
            }
        });
    });

    it('should get a list on BBC.com', () => {

        browser.waitForAngularEnabled(false);
        browser.get('https://www.bbc.com');

        // CSS shortcut version
        $$("html li").getText.then(function (arrayOfText) {
            console.log(arrayOfText);
        });

        // by.tagName version
        element.all(by.tagName("li")).getText().then(function (elements) {
            console.log(elements);
        });

    });

    it('should get a specific list from BBS', () => {

        browser.waitForAngularEnabled(false);
        browser.get('https://www.bbc.com');


        // CSS parent to child version
        $$("#orb-nav-links>ul>li").getText().then(function (links) {

            console.log(links);
        });

        // Chain locators
        element(by.css("orb-nav-links")).all(by.tagName("li"))
            .getText().then(function (links) {
                console.log(links);
            });
    });

    it('should get all elements text', () => {

        browser.get("https://hn.algolia.com");
        var resultTitles = $$(".item-title-and-infos>h2>a");
        resultTitles.getText().then(function (elementArrayText) {
            browser.sleep(4000);
            console.log(elementArrayText);
        });
    });

    it('should get total count of elements', () => {
        browser.get("https://hn.algolia.com");
        var totalResultCount = $$(".item-title-and-infos>h2>a").count();
        totalResultCount.then(function (totalTitles) {
            console.log("Total count in the page is " + totalTitles);
        });
    });

    it('should get first element from all elements', () => {

        browser.get('https://hn.algolia.com');
        var firstItem = $$(".item-title-and-infos>h2>a").first();
        var lastItem = $$(".item-title-and-infos>h2>a").last();

        firstItem.getText().then(function (elementText) {
            console.log("First element is: " + elementText);
        });

        lastItem.getText().then(function (elementText) {
            console.log("Last element is:" + elementText);
        })
    });

    it('should find the exact element', () => {
        browser.get('https://hn.algolia.com');
        var item = $$(".item-title-and-infos>h2>a");
        var sixthItem = item.get(5);
        var tenthItem = item.get(9);

        sixthItem.getText().then(function (textSixth) {
            console.log("6th item of the array is: " + textSixth);
        })

        tenthItem.getText().then(function (textTenth) {
            console.log("10th item of the array is: " + textTenth)
        });
    });

    fit('should find the title and date elements', () => {
        browser.get('https://hn.algolia.com');
        var parentElement = $$(".item-infos.list-inline");
        var resultTitle = parentElement.$$('h2>a');
        var resultDate = parentElement.all(by.partialLinkText("ago"));

        resultTitle.getText().then(function (text) {
            console.log("Title is: " + text);
        });
        resultDate.getText().then(function (date) {
            console.log("Date is: " + date);
        });
    });
});
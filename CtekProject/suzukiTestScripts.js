/**********************************
 * suzuki.com test scripts
 * 
 * 1. Navigate to http://www.suzukicycles.com/
 * Verify the title of the page
 * Verify Suzuki icon is present on top left
 * 
 * 2. Click on MOTORCYCLES
 * Verify the following motorcycle options exist by comparing text of the following expected types
 * names:
 * SPORTBIKE
 * CR*UISER
 * TOURING
 * STANDARD
 * ADVENTURE
 * DUALSPORT
 * SUPERMOTO
 * MOTOCROSS
 * OFF ROAD
 * 
 * 3. Save all motorcycle options in an array motoTypes2018
 * Click on 2016
 * Verify same motorcycle options
 * Save all 2016 motorcycle options in an array motoTypes2016
 * Compare both array and make sure both lists have same content
 */


describe('Suzuki Assignment', () => {

    let motoTypes2018 = [];
    let motoTypes2016 = [];
    let sameTypes = [];


    // 1. Navigate to http://www.suzukicycles.com/
    // Verify the title of the page


    it('Should test suzukicycles.com ,verify the title', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://www.suzukicycles.com/');
        // Verify the title of the page
        browser.getTitle().then((title) => {
            console.log(`Web site title is : ${title}`);
        });
        // Verify Suzuki icon is present on top left
        $("a[href = '/?sc_lang=en']").isDisplayed().then((result) => {
            console.log(`Logo is present: ${result}`);
        });
        browser.sleep(1000);
        // 2. Click on MOTORCYCLES
        // Verify the following motorcycle options exist by comparing text of the following expected types
        $("a[id='cycles']").click();

        $$("#bikeCatCont h2>a").each((elements) => {
            elements.getText().then((text) => {
                let t = text.slice(0, text.indexOf('CATEGORY NAME'));
                console.log(t);
            });
        });
        browser.sleep(2000);
        // 3. Save all motorcycle options in an array motoTypes2018
        $('#body_0_rptYears_yearItem_1').click();
        browser.sleep(2000);

        $$('.bikeName>a').getText().then((array) => {
            motoTypes2018 = array;
            console.log(`Mototypes 2018 : ${motoTypes2018}`);
        });

        // Click on 2016
        $('#body_0_rptYears_yearItem_3').click();
        browser.sleep(3000);
        // Verify same motorcycle options
        // Save all 2016 motorcycle options in an array motoTypes2016
        // Compare both array and make sure both lists have same content

    });
});
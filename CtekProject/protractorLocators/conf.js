exports.config = {

    // If selenium server does not work, enable this one
    directConnect: true,

    //address of our selenium server    
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //which browser would you want to use for your tests?
    capabilities: {
        'browserName': 'chrome',
    },

    //the name of your test scripts file
    specs: ['spec.js'],

    //which BDD framework we're going to use
    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = undefined; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results = [
    {
        "description": "should display Sign Up button|4stay.com Sign Up page functionality",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11440,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305620207,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305623068,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://4stay.com/api/v2/users/me - Failed to load resource: the server responded with a status of 401 ()",
                "timestamp": 1540305623620,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305625482,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00dd00a4-001a-0030-0022-00a500400044.png",
        "timestamp": 1540305616269,
        "duration": 10390
    },
    {
        "description": "should display four elements on first SignUp page|4stay.com Sign Up page functionality",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11440,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305628913,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305633019,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://4stay.com/api/v2/users/me - Failed to load resource: the server responded with a status of 401 ()",
                "timestamp": 1540305633377,
                "type": ""
            }
        ],
        "screenShotFile": "images\\003600da-00ff-0032-005a-0091000c00da.png",
        "timestamp": 1540305627602,
        "duration": 6417
    },
    {
        "description": "should continue with Facebook Button|4stay.com Sign Up page functionality",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11440,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305636241,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://4stay.com/ - Mixed Content: The page at 'https://4stay.com/' was loaded over HTTPS, but requested an insecure image 'http://idsync.rlcdn.com/382666.gif?partner_uid=7512771311623381815'. This content should also be served over HTTPS.",
                "timestamp": 1540305638649,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305640082,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://4stay.com/api/v2/users/me - Failed to load resource: the server responded with a status of 401 ()",
                "timestamp": 1540305640374,
                "type": ""
            }
        ],
        "screenShotFile": "images\\002100e1-005b-000c-00b1-00fc00450018.png",
        "timestamp": 1540305634981,
        "duration": 7966
    },
    {
        "description": "should continue with more options button|4stay.com Sign Up page functionality",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11440,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305646267,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305649164,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://4stay.com/api/v2/users/me - Failed to load resource: the server responded with a status of 401 ()",
                "timestamp": 1540305649861,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001600bb-0038-0004-0097-00df0037005d.png",
        "timestamp": 1540305643321,
        "duration": 7095
    },
    {
        "description": "should verify \"Continue with Facebook\" and \"Continue with Google\" links|4stay.com Sign Up page functionality",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11440,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305653002,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305655174,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://4stay.com/api/v2/users/me - Failed to load resource: the server responded with a status of 401 ()",
                "timestamp": 1540305655873,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305658130,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://4stay.com/api/v2/users/me - Failed to load resource: the server responded with a status of 401 ()",
                "timestamp": 1540305658926,
                "type": ""
            }
        ],
        "screenShotFile": "images\\009400ad-005e-0054-0086-0051003f0085.png",
        "timestamp": 1540305651450,
        "duration": 8196
    },
    {
        "description": "should verify \"Continue with email button\"|4stay.com Sign Up page functionality",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11440,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305664671,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://idsync.rlcdn.com/1000.gif?memo=CMiIFxIrCicIARDqIhogNjFiYTFjMzI1YzM0MDE3MTBiZTFkODgzNjgxYzMwN2EQABoNCILmvN4FEgUI6AcQAEIASgA - Failed to load resource: the server responded with a status of 504 ()",
                "timestamp": 1540305669386,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305670268,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://4stay.com/api/v2/users/me - Failed to load resource: the server responded with a status of 401 ()",
                "timestamp": 1540305670960,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00c3008f-0003-0055-00ad-005900570025.png",
        "timestamp": 1540305661822,
        "duration": 11224
    },
    {
        "description": "should verify first name field|4stay.com Sign Up page functionality",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11440,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305675242,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "https://connect.facebook.net/en_US/fbevents.js 24:14549 \"[Facebook Pixel] - Duplicate Pixel ID: 217649548700528.\"",
                "timestamp": 1540305677584,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://4stay.com/api/v2/users/me - Failed to load resource: the server responded with a status of 401 ()",
                "timestamp": 1540305678007,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00e40016-0069-00ca-004b-003000b800dd.png",
        "timestamp": 1540305673963,
        "duration": 5078
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};

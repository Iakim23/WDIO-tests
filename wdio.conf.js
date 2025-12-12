exports.config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [],

    maxInstances: 1,

    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--window-size=1920,1080',
                '--start-maximized',
                '--no-sandbox'
            ]
        }
    }],

    logLevel: 'warn',
    bail: 0,

    baseUrl: 'https://www.saucedemo.com',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Хуки
    before: async function () {
        await browser.setWindowSize(1920, 1080);
    },

    afterTest: async function (test, context, { error }) {
        if (error) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = `ERROR_${test.title}_${timestamp}.png`;

            const fs = require('fs');
            if (!fs.existsSync('./errorShots')) {
                fs.mkdirSync('./errorShots');
            }

            await browser.saveScreenshot(`./errorShots/${filename}`);
        }
    }
};

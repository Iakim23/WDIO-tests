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
                '--disable-gpu',
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

    afterTest: async function () {
        await browser.pause(5000); // Пауза 5 сек после каждого теста
    }
}
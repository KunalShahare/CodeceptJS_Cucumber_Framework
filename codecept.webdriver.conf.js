const { setHeadlessWhen } = require('@codeceptjs/configure');
require('dotenv').config();

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/**/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://id.atlassian.com/login',
      browser: 'firefox',
      "windowSize": "maximize",
      "waitForTimeout": 5000,
      "smartWait": 5000,
      "restart": true,
    },

    REST: {},

    CustomHelper: {
      require: './test/helpers/custom.helper.js',
    }
  },

  gherkin: {
    features: './test/features/*.feature',
    steps: [
      './test/step-definitions/restrictions.js',
    ]
  },

  include: {
    LoginPage: './test/pageobject/login.page.js',
    HomePage: './test/pageobject/home.page.js',
    OverviewPage: './test/pageobject/overview.page.js',
  },

  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
    },
    retryFailedStep: {
      enabled: true,
      retries: 2,
    },
    allure: {
      enabled: true,
    },
  },  

  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests',
}
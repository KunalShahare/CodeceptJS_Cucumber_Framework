# CodeceptJS

This is CodeceptJS End to End Test Automation Framework for acceptance test, which uses WebdriverIO as Helper library. It is a combination of Javascript with Webdriver. Refer document under CodeceptJS folder for more details. 

## Pre-requisite:
- Download and install latest version of NPM and Node in your machine.
- Install Visual Studio Code latest version / Use any other IDE.
- Clone the project from the bitbucket & Open the Project in VSC.
- Install all the dependencies & Libraries defined under package.json file by running below command on Terminal.

    ```
    npm install
    ```
NB_Make sure to run this command under the root folder of clone project.

- Define the test execution commands under package.json like below (if require)

    ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "codeceptjs run --steps -c codecept.webdriver.conf.js --plugins allure",
    "postreport": "allure serve output"
  },
    ```

- Config generator (Optional)
Recommend using the sample working codecept.webdriver.conf.js version under Project. Otherewise this can genrate a brand new config file if required.

    ```
    npx codeceptjs config
    ```

- Run below command to genrate TypeScript Definitions which allows IDEs to provide autocompletion when writing tests.

    ```
    npx codeceptjs def
    ```

- The dotenv library has been used to manage / protect the user specific information. The user has to create ".env" file with below details and add the EMAILID and PASSWORD. For assement review purpose, I have kept my bitbucket trail account details in .env file but usually this file won't be part of repo (need to include in gitignore).
    ```
    LOGIN_EMAILID=kunalshahare@gmail.com
    LOGIN_PASSWORD=Infosys@123
    ```

## To Execute Tests
- This command will run the test defined as per configuration given under codecept.webdriver.conf.js file.

    ```
    npm start
    ```
NB_The Script defintion for start is given under package.json file.

- This command will generate allure report.

    ```
    allure serve output
    ```
NB_It will genrate the HTML report by using the logs genrated under Output folder. Also, the logs will be override for every run.

- The browser preference can be changed in codecept.webdriver.conf.js file.

    ```
    WebDriver: {
      url: 'http://localhost',
      browser: 'firefox',
      "windowSize": "maximize",
      "waitForTimeout": 5000,
      "smartWait": 5000,
      "restart": true,
    },
    ```

## Important Pointers
- The gherkin configurations are defined under codecept.webdriver.conf.js.

    ```
      gherkin: {
    features: './test/features/*.feature',
    steps: [
      './test/step-definitions/restrictions.js',
    ]
  },
    ```
- Below 3 plugins are added for WDIO helper, retryFailedStep and Allure reporting.

    ```
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
    ```




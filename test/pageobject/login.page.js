const I = actor();

//Locators with differnt strategies - ID, CSS, XPATH
const enterEmail = '#username';
const submitButton = '#login-submit';
const enterPassword = '#password';
const homePageLoad = '[data-testid="home-page-content"]';
const searchBoxLoad = '[data-test-id="search-dialog-input"]';

module.exports={

    //Login to Confluence Portal
    loginConfluencePortal(){
        I.amOnPage('/');
        I.fillField(enterEmail, process.env.LOGIN_EMAILID);
        I.click(submitButton);
        I.fillField(enterPassword, process.env.LOGIN_PASSWORD);
        I.click(submitButton);
        I.waitForElement(homePageLoad,20);
        I.waitForElement(searchBoxLoad,20)
    }

}

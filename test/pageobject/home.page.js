const I = actor();

//Locators with differnt strategies - ID, CSS, XPATH
const searchPage = '[data-test-id="search-dialog-input"]';
const searchedPageLandingPage = '#tools-menu-trigger';

module.exports={
    
    //Searching a particular page using Search box on home page
    searchExistingPage(){
        I.click(searchPage);
        I.fillField(searchPage, 'Exploratory Test Assessment');
        I.pressKey('ArrowDown');
        I.pressKey('Enter');
        I.waitForElement(searchedPageLandingPage, 30);
    }

}

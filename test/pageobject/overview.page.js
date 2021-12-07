let assert = require('assert');
const I = actor();


//Locators with differnt strategies - ID, CSS, XPATH
const moreActions = '#tools-menu-trigger';
const restrictionsOptions = '#bm-restrictions-link';
const restrictionsDropDown = '[data-test-id="restrictions-dialog.content-mode-select"]';
const userAndGroupSearch = '[class="fabric-user-picker__placeholder css-6fiita-placeholder"]';
const addButtonAnyoneViewSomeEdit = '[class="e3nhwts5 css-17mybho"]';
const addButtonOnlySpecificViewEdit = '[class="e3nhwts5 css-17mybho"]';
const applyButton = '//span[text()="Apply"]';
const searchPage = '[data-test-id="search-dialog-input"]';

module.exports={

    //Click the three dots to see more options for Page under test
    clickMoreOptionsButton(){
        I.click(moreActions);       
    },

    //Select Restrictions options from the list
    selectRestrictionsSettingOption(){
        I.click(restrictionsOptions)  
        I.waitForElement(restrictionsDropDown, 15)      
    },

    //First step to click Change Restrictions Settings dropdown
    changeRestrictionsSettings(){
        I.click(restrictionsDropDown)
    },

    //Change the Settings to Anyone can view, only some can edit
    //Type is used to types the given text in field. Here, fillField doesn't work for react object
    changeToAnyoneCanView(){
        I.pressKey("ArrowDown");
        I.pressKey('Enter');
        I.wait(5);
        I.click(userAndGroupSearch);
        I.type('Trello'); 
        I.pressKey("ArrowDown");
        I.pressKey('Enter');
        I.wait(5);
        I.click(addButtonAnyoneViewSomeEdit);
        I.wait(5);
    },

    //Change the Settings to Only Specific people can view and edit
    //Type is used to types the given text in field. Here, fillField doesn't work for react object
    changeToOnlySpecificPeopleViewEdit(){
        I.pressKey("ArrowDown");
        I.pressKey("ArrowDown");
        I.pressKey('Enter');
        I.wait(5);
        I.click(userAndGroupSearch);
        I.type('Trello'); 
        I.pressKey("ArrowDown");
        I.pressKey('Enter');
        I.wait(5);
        I.click(addButtonOnlySpecificViewEdit);
        I.wait(5);
    },

    //Change the Settings to Anyone can view and edit
    changeToAnyoneCanViewEdit(){
        I.pressKey('Enter');
        I.wait(5);
    },

    //Click Apply button to apply the restrictions
    applyRestrictions(){
        I.click(applyButton);
        I.wait(5);
    },

    //Validations to verify the expected outcomes
    assertRestrictions(){
        I.seeElement(searchPage);
    },

    assertExpectedActualRestrictions(ExpectedRestriction){
        I.seeElement(locate('span').withText(ExpectedRestriction));
    }
}

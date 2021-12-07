const { I, TodosPage, LoginPage, HomePage, OverviewPage } = inject();

Given('the user is on conflunece page', () => {
  LoginPage.loginConfluencePortal();
})

When('the user change restrictions for the page - Index {int}', (Index) => {

  HomePage.searchExistingPage();
  OverviewPage.clickMoreOptionsButton();
  OverviewPage.selectRestrictionsSettingOption();
  OverviewPage.changeRestrictionsSettings();

  if(Index==1){
    OverviewPage.changeToAnyoneCanViewEdit();
  } else if(Index==2){
    OverviewPage.changeToAnyoneCanView();
  } else if(Index==3){
    OverviewPage.changeToOnlySpecificPeopleViewEdit();
  }

  OverviewPage.applyRestrictions();
})

Then('the user should see correct restriction applied - ExpectedRestriction {}', (ExpectedRestriction) => {
  OverviewPage.assertRestrictions();
  OverviewPage.clickMoreOptionsButton();
  OverviewPage.selectRestrictionsSettingOption();
  OverviewPage.changeRestrictionsSettings();
  OverviewPage.assertExpectedActualRestrictions(ExpectedRestriction); 
})
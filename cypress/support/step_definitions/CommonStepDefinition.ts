import CommonPage from '../page_objects/CommonPage';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const commonPage = new CommonPage();

Given('User navigate to Axiom page', () => {
  commonPage.gotoUrl('/');
});

Given('Wait for loading icon disappears', () => {
  commonPage.verifyLoadingIconDisapper();
});

When('Click to "{}" button in Details session', (btnName) => {
  commonPage.clickButtonByName(btnName);
});

Then('User can see "{}" page', (headerText) => {
  commonPage.verifyPageHeader(headerText);
});

Then('User can see message "{}"', (message) => {
  commonPage.verifyTextVisible(message);
});

Then('Verify "{}" button is disabled', (btnName) => {
  commonPage.verifyButtonDisabled(btnName);
});

Then('Verify "{}" button is selected', (btnName) => {
  commonPage.verifyButtonSelected(btnName);
});

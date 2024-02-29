import HomePage from '../page_objects/HomePage';
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

const homePage = new HomePage();

When("Click to 'New Access Request' button", () => {
  homePage.clickNewAccessRequestButton();
});

When('Select "{}" from Request dropdown', (item) => {
  homePage.selectItemFromRequestDropdown(item);
});

When('Select "{}" from Request dropdown', (item) => {
  homePage.selectItemFromRequestDropdown(item);
});

Then('User can see Home page', () => {
  homePage.verifyHomePage();
});

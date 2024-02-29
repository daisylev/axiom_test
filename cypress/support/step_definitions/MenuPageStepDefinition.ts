import MenuPage from '../page_objects/MenuPage';
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

const menuPage = new MenuPage();

When("User log out", () => {
  menuPage.signOut();
});

When('User click to Request on Menu', () => {
  menuPage.clickRequestsMenuOption();
});

When('User click to Home on Menu', () => {
  menuPage.clickHomeMenuOption();
});

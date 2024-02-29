import LoginPage from '../page_objects/LoginPage';
import { When } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPage();

When('Type "{}" to Email textbox', (email) => {
  loginPage.typeValueToEmail(email);
});

When('Type "{}" to Password textbox', (password) => {
  loginPage.typeValueToPassword(password);
});

When('Click to Login button', () => {
  loginPage.clickToLoginButton();
});

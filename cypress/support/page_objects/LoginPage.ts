import CommonPage from './CommonPage';
const commonPage = new CommonPage();

class LoginPage {
  elements = {
    emailTextbox: () => cy.get('#1-email'),
    passwordTextbox: () => cy.get('#1-password'),
    loginButton: () => cy.get('#1-submit'),
  };

  typeValueToEmail = (value) => commonPage.typeValueToTextbox(this.elements.emailTextbox(), value);

  typeValueToPassword = (value) => commonPage.typeValueToTextbox(this.elements.passwordTextbox(), value);

  clickToLoginButton = () => commonPage.clickElement(this.elements.loginButton());
}

export default LoginPage;

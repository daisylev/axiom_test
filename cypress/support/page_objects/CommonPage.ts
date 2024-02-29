class CommonPage {
  elements = {
    pageHeader: () => cy.get('.page-title'),
    loadingIcon: () => cy.get('.loader-logo'),
    button: (btnName) => cy.get('button').contains(btnName),
    mainPage: () => cy.get('.app__main'),
  };

  gotoUrl = (url: string) => cy.visit(url);

  scrollMainPageToTop = () => this.elements.mainPage().scrollTo('top');

  clickElement = (element) => element.should('be.visible').click();

  clickText = (text) => cy.contains(text).click();

  clickButtonByName = (btnName) => this.clickElement(this.elements.button(btnName));

  hoverElement = (element) => element.should('be.visible').trigger('mouseover');

  typeValueToTextbox = (element, value: string) => element.should('be.visible').clear().type(value);

  selectOptionFromDropdown = (dropDownElement, option: string) => dropDownElement.select(option, { force: true });

  verifyElementDisplay = (element) => element.should('be.visible');

  verifyTextVisible = (text: string) => cy.contains(text).should('be.visible');

  verifyElementNotExist = (element) => element.should('not.exist');

  verifyContainText = (element, value) => element.should('contain', value);

  verifyPageHeader = (headerText: string) => this.elements.pageHeader().should('include.text', headerText);

  verifyLoadingIconDisapper = () => {
    this.verifyElementNotExist(this.elements.loadingIcon());
  };

  verifyValueOfElement = (element, value) => {
    element.should('have.attr', 'value', value);
  };

  verifyButtonDisabled = (btnName) => {
    this.elements.button(btnName).should('have.attr', 'disabled');
  };

  verifyButtonSelected = (btnName) => {
    this.elements.button(btnName).should('have.class', 'bNQydQ');
  };

  waitSecond = (time) => {
    cy.wait(time*1000)
  };
}

export default CommonPage;

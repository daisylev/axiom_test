import CommonPage from './CommonPage';
const commonPage = new CommonPage();

class HomePage {
  elements = {
    urlWebsite: () => cy.url(),
    quickTemplateHeader: () => cy.contains('Quick Request from Template'),
    newAccessRequestButton: () => cy.get('#menu-button'),
    itemFromRequestDropdown: (item) => cy.get('[role="menuitem"]').contains(item),
  };

  clickNewAccessRequestButton = () => {
    commonPage.clickElement(this.elements.newAccessRequestButton());
    this.elements.itemFromRequestDropdown('AWS').should('be.visible');
  };

  selectItemFromRequestDropdown = (item) => {
    commonPage.clickElement(this.elements.itemFromRequestDropdown(item));
  };

  verifyHomePage = () => {
    this.elements.quickTemplateHeader().should('be.visible');
  };
}

export default HomePage;

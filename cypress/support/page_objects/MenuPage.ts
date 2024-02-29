import CommonPage from './CommonPage';
const commonPage = new CommonPage();

class MenuPage {
  elements = {
    homeMenu: () => cy.get('.sidebar__menu #start'),
    requestsMenu: () => cy.get('.sidebar__menu #requests'),
    footerLink: () => cy.get('.sidebar__footer [data-cy="sidebar-user"]')
  };

  clickHomeMenuOption = () => {
    commonPage.clickElement(this.elements.homeMenu());
  };

  clickRequestsMenuOption = () => {
    commonPage.clickElement(this.elements.requestsMenu());
  };

  signOut = () => {
    commonPage.clickElement(this.elements.footerLink());
    commonPage.clickText('Log out');
    commonPage.waitSecond(5);
  };
}

export default MenuPage;

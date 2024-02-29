import { head } from 'cypress/types/lodash';
import CommonPage from './CommonPage';
const commonPage = new CommonPage();

class AccessRequestPage {
  elements = {
    sourceDropdown: () => cy.get('#source'),
    limitedPeriodButton: () => cy.get('[data-cy="granular-duration-selector"]').find('[data-button-type="contained"]'),
    durationTextbox: () => cy.get('.sc-dwalKd'),
    titleTextbox: () => cy.get('#title'),
    addresseeDropdown: () => cy.get('[data-cy="addressee-filter"]'),
    addresseeTextbox: () => cy.get('[placeholder="Select Addressee"]'),
    itemFromAddresseeDropdown: (addressee) => cy.get('#scrollableDiv').contains(addressee),
    resourceDropdown: () => cy.get('[data-cy="Resource-filter"]').find('[data-cy="InfiniteListDropdown"]'),
    resourceTextbox: () => cy.get('[placeholder="Select Resource"]'),
    itemFromResourceDropdown: (resource) => cy.get('[data-cy="infiniteDropDownRow"]').contains(resource),
    permissionsDropdown: () => cy.get('[data-cy="permission-filter"]').find('[data-cy="InfiniteListDropdown"]'),
    permissionsTextbox: () => cy.get('[placeholder="Select Permissions"]'),
    itemFromPermissionsDropdown: (permission) => cy.get('[data-cy="InfiniteListDropdown"]').contains(permission),
    reasonTextbox: () => cy.get('#reason'),
    submitButton: () => cy.get('[data-cy="save-button"]'),
    valueByTypeInForm: (type) => cy.get('[data-cy="title"]').contains(type).siblings(),
    actorOfEvents: () => cy.get('[data-cy="actor"]'),
    typeOfEvents: () => cy.get('[data-cy="type"]'),
    targetOfEvents: () => cy.get('[data-cy="target"]'),
    headerPanel: () => cy.get('.sc-ddjGPC'),
    valueByTypeOnPanel: (type) => cy.get('.sc-ddjGPC').find('.opacity-50').contains(type).siblings(),
    editorCode: () => cy.get('.editor-container'),
    closePanelButton: () => cy.get('.sc-ddjGPC').find('svg'),
    approveButton: () => cy.get('[data-cy="approve-button"]'),
    approveButtonOnPanel: () => cy.get('[data-cy="modal-action"]'),
    titlePopup: (title) => cy.get('.axiom-modal').contains(title),
    timeTextbox: () => cy.get('.time-selection').find('input'),
  };

  typeToDurationTextbox = (value) => {
    commonPage.typeValueToTextbox(this.elements.durationTextbox(), value);
  };

  typeToTimeTextbox = (value) => {
    commonPage.typeValueToTextbox(this.elements.timeTextbox(), value);
    this.elements
      .timeTextbox()
      .invoke('val')
      .then((value) => {
        if (typeof value === 'string') {
          const count = value.length;
          for (let i = 0; i < count; ++i) {
            this.elements.timeTextbox().type('{rightarrow}');
            this.elements.timeTextbox().type('{backspace}');
          }
        }
      });
  };

  typeToReasonTextbox = (value) => {
    commonPage.typeValueToTextbox(this.elements.reasonTextbox(), value);
  };

  clickToSubmitButton = () => {
    commonPage.clickElement(this.elements.submitButton());
  };

  clickClosePanelButton = () => {
    commonPage.clickElement(this.elements.closePanelButton());
  };

  clickToApproveButton = () => {
    commonPage.scrollMainPageToTop();
    commonPage.clickElement(this.elements.approveButton());
  };

  clickToApproveButtonOnPanel = () => {
    commonPage.clickElement(this.elements.approveButtonOnPanel());
  };

  selectItemFromAddressee = (addressee) => {
    commonPage.clickElement(this.elements.addresseeDropdown());
    commonPage.clickElement(this.elements.itemFromAddresseeDropdown(addressee));
  };

  selectItemFromResource = (resource) => {
    commonPage.clickElement(this.elements.resourceDropdown());
    commonPage.clickElement(this.elements.itemFromResourceDropdown(resource));
  };

  selectItemFromPermission = (permission) => {
    commonPage.clickElement(this.elements.permissionsDropdown());
    commonPage.clickElement(this.elements.itemFromPermissionsDropdown(permission));
  };

  verifyActorOfEvent = (value) => {
    commonPage.verifyContainText(this.elements.actorOfEvents(), value);
  };

  verifyTypeOfEvent = (value) => {
    commonPage.verifyContainText(this.elements.typeOfEvents(), value);
  };

  verifyTargetOfEvent = (value) => {
    commonPage.verifyContainText(this.elements.targetOfEvents(), value);
  };

  verifyHeaderPanel = (header) => {
    commonPage.verifyContainText(this.elements.headerPanel(), header);
  };

  verifyValueByTypeInForm = (type, value) => {
    commonPage.verifyContainText(this.elements.valueByTypeInForm(type), value);
  };

  verifySourceSelected = (item) => {
    this.elements.sourceDropdown().should('contain', item);
  };

  verifyHeaderPanelDisappear = (header) => {
    commonPage.verifyElementNotExist(this.elements.headerPanel());
  };

  verifyLimitedPeriodButtonSelected = () => {
    this.elements.limitedPeriodButton().should('have.class', 'bNQydQ');
  };

  verifyValueOfDuration = (value) => {
    commonPage.verifyValueOfElement(this.elements.durationTextbox(), value);
  };

  verifyValueOfTitle = (value) => {
    commonPage.verifyValueOfElement(this.elements.titleTextbox(), value);
  };

  verifyAddresseeSelected = (addressee) => {
    commonPage.verifyValueOfElement(this.elements.addresseeTextbox(), addressee);
    cy.wait(1000);
  };

  verifyResourceSelected = (resource) => {
    commonPage.verifyValueOfElement(this.elements.resourceTextbox(), resource);
    cy.wait(1000);
  };

  verifyPermissionSelected = (permission) => {
    commonPage.verifyValueOfElement(this.elements.permissionsTextbox(), permission);
    cy.wait(1000);
  };

  verifyValueByTypeOnPanel = (type, value) => {
    commonPage.verifyContainText(this.elements.valueByTypeOnPanel(type), value);
  };

  verifyEditorCodeDisplay = () => {
    commonPage.verifyElementDisplay(this.elements.editorCode());
  };

  verifyTitlePopup = (title) => {
    commonPage.verifyElementDisplay(this.elements.titlePopup(title));
  };
}

export default AccessRequestPage;

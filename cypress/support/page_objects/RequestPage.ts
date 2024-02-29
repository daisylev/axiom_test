import CommonPage from './CommonPage';
const commonPage = new CommonPage();

class RequestPage {
  elements = {
    nameOfRequestAtIndex: (index) => cy.get('[data-cy="request-name"]').eq(index),
    targetOfRequestAtIndex: (index) => cy.get('[data-cy="request-target"]').eq(index),
    addresseeOfRequestAtIndex: (index) => cy.get('[data-cy="request-addressee"]').eq(index),
    durationOfRequestAtIndex: (index) => cy.get('[data-cy="cell-duration"]').eq(index),
    statusOfRequestAtIndex: (index) => cy.get('[data-cy="status-content"]').eq(index),
    rowOnRequestTableAtIndex: (index) => cy.get('[data-cy="table-row"]').eq(index),
  };

  clickToFirstRowOnRequestTable = () => {
    commonPage.clickElement(this.elements.rowOnRequestTableAtIndex(0));
  };

  verifyNameOfRequestAtIndex = (value, index) => {
    commonPage.verifyContainText(this.elements.nameOfRequestAtIndex(index - 1), value);
  };

  verifyTargetOfRequestAtIndex = (value, index) => {
    commonPage.verifyContainText(this.elements.targetOfRequestAtIndex(index - 1), value);
  };

  verifyAddresseeOfRequestAtIndex = (value, index) => {
    commonPage.verifyContainText(this.elements.addresseeOfRequestAtIndex(index - 1), value);
  };

  verifyDurationOfRequestAtIndex = (value, index) => {
    commonPage.verifyContainText(this.elements.durationOfRequestAtIndex(index - 1), value);
  };

  verifyStatusOfRequestAtIndex = (value, index) => {
    commonPage.verifyContainText(this.elements.statusOfRequestAtIndex(index - 1), value);
  };
}

export default RequestPage;

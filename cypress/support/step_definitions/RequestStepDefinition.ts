import RequestPage from '../page_objects/RequestPage';
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

const requestPage = new RequestPage();

When('Click to created Request', () => {
  requestPage.clickToFirstRowOnRequestTable();
});

Then('Verify Name of created Request is "{}" at index "{}"', (value, index) => {
  requestPage.verifyNameOfRequestAtIndex(value, index);
});

Then('Verify Target of created Request is "{}" at index "{}"', (value, index) => {
  requestPage.verifyTargetOfRequestAtIndex(value, index);
});

Then('Verify Addressee of created Request is "{}" at index "{}"', (value, index) => {
  requestPage.verifyAddresseeOfRequestAtIndex(value, index);
});

Then('Verify Duration of created Request is "{}" at index "{}"', (value, index) => {
  requestPage.verifyDurationOfRequestAtIndex(value, index);
});

Then('Verify Status of created Request is "{}" at index "{}"', (value, index) => {
  requestPage.verifyStatusOfRequestAtIndex(value, index);
});

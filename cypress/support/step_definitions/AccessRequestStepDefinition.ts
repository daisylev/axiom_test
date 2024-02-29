import AccessRequestPage from '../page_objects/AccessRequestPage';
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

const accessRequestPage = new AccessRequestPage();

When("Click to 'Submit' button", () => {
  accessRequestPage.clickToSubmitButton();
});

When('Select "{}" from Addressee dropdown', (addressee) => {
  accessRequestPage.selectItemFromAddressee(addressee);
});

When('Select "{}" from Resource dropdown', (resource) => {
  accessRequestPage.selectItemFromResource(resource);
});

When('Select "{}" from Permission dropdown', (permission) => {
  accessRequestPage.selectItemFromPermission(permission);
});

When('Type "{}" to Duration textbox', (value) => {
  accessRequestPage.typeToDurationTextbox(value);
});

When('Type "{}" to Reason textbox in Why session', (value) => {
  accessRequestPage.typeToReasonTextbox(value);
});

When('Type "{}" to Time textbox', (value) => {
  accessRequestPage.typeToTimeTextbox(value);
});

When("Click to close 'Access Request JSON View' panel button", () => {
  accessRequestPage.clickClosePanelButton();
});

When("Click to 'Approve' button", () => {
  accessRequestPage.clickToApproveButton();
});

When("Click to 'Approve' button on panel", () => {
  accessRequestPage.clickToApproveButtonOnPanel();
});

Then('User can see "Access Request JSON View" panel disappears', (header) => {
  accessRequestPage.verifyHeaderPanelDisappear(header);
});

Then('Verify "{}" is selected from Source dropdown', (item) => {
  accessRequestPage.verifySourceSelected(item);
});

Then("Verify 'Limited Period' button is selected", () => {
  accessRequestPage.verifyLimitedPeriodButtonSelected();
});

Then('Verify value of Duration textbox is "{}"', (value) => {
  accessRequestPage.verifyValueOfDuration(value);
});

Then('Verify title of Request is "{}"', (value) => {
  accessRequestPage.verifyValueOfTitle(value);
});

Then('Verify "{}" Addressee is selected', (addressee) => {
  accessRequestPage.verifyAddresseeSelected(addressee);
});

Then('Verify "{}" Resource is selected', (resource) => {
  accessRequestPage.verifyResourceSelected(resource);
});

Then('Verify "{}" Permission is selected', (permission) => {
  accessRequestPage.verifyPermissionSelected(permission);
});

Then('Verify "{}" on Form session is "{}"', (type, value) => {
  accessRequestPage.verifyValueByTypeInForm(type, value);
});

Then('Verify "{}" on Details session is "{}"', (type, value) => {
  accessRequestPage.verifyValueByTypeInForm(type, value);
});

Then('Verify Actor on Events session is "{}"', (value) => {
  accessRequestPage.verifyActorOfEvent(value);
});

Then('Verify Type on Events session is "{}"', (value) => {
  accessRequestPage.verifyTypeOfEvent(value);
});

Then('Verify Targets on Events session is "{}"', (value) => {
  accessRequestPage.verifyTargetOfEvent(value);
});

Then('User can see "{}" panel appears', (header) => {
  accessRequestPage.verifyHeaderPanel(header);
});

Then('Verify "{}" on Request JSON panel is "{}"', (type, value) => {
  accessRequestPage.verifyValueByTypeOnPanel(type, value);
});

Then('Verify there is editor code session', () => {
  accessRequestPage.verifyEditorCodeDisplay();
});

Then('User can see "{}" popup appears', (title) => {
  accessRequestPage.verifyTitlePopup(title);
});

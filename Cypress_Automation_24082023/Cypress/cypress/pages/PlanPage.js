class Plan {

btnTiers = "//div[text()='Tiers']";
btnTiersAddNewPlan = "//span[text()='Add New Plan']";
btnAddNewPlanAddNewFeature = "//button[@tabindex='0' and @class='MuiButtonBase-root MuiIconButton-root']";
btnAddNewPlanDeleteFeature = "//button[@type='button' and @tabindex='0']";
btnAddNewPlanWindowSubmit = "//button[@type='submit']";
btnKebabMenu = "//button[@aria-label='more']";
btnKebabEdit = "//span[text()='Edit']";
btnKebabUnhide = "//span[text()='Unhide']";
btnKebabHide = "//span[text()='Hide']";
btnKebabDuplicate = "//span[text()='Duplicate']";
btnKebabDelete = "//span[text()='Delete']";
btnAddNewPlanWindowCancel = "//span[text()='Cancel']";
btnUnhideWindowUnhide = "//span[text()='Unhide' and @class='my-auto ']";
btnUnhideWindowCancel = "//span[text()='Cancel' and @class='my-auto ']";
btnHideWindowHide = "//span[text()='Hide' and @class='my-auto ']";
btnHideWindowCancel = "//span[text()='Cancel' and @class='my-auto ']";
btnEditWindowCancel = "//span[@class='my-auto ' and text()='Cancel']";
btnEditWindowSave = "//button[@type='submit']";
btnDuplicateWindowCancel = "//span[@class='my-auto ' and text()='Cancel']";
btnDuplicateWindowDuplicatePlan = "//button[@type='submit']";
lblTiersAddNewPlanTitle = "//div[@id='customized-dialog-title']";
lblAddNewPlanAddedSuccessfully = "//span[@class='my-auto ml-1 mr-3']";
lblAddNewPlanEditedSuccessfully = "//span[@class='my-auto ml-1 mr-3']";
lblAddNewPlanDuplicatedSuccessfully = "//span[@class='my-auto ml-1 mr-3']";
lblAddNewPlanNameBlankMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right mr-1' and contains(text(), 'Name')]";
lblAddNewPlanSelectProductBlankMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right mr-1' and contains(text(), 'Required')]";
lblAddNewPlanSelectPlanTypeBlankMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right mr-1' and contains(text(), 'Required')]";
lblAddNewPlanNameExceedLimit = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right mr-1' and contains(text(), 'Name')]";
lblAddNewPlanFootNoteExceedLimit = "//p[@class='MuiFormHelperText-root h5 color-primary-danger t-align-right' and contains(text(), 'Foot')]";
lblAddNewPlanRowGridCount = "//div[@class='MuiGrid-root my-2 mx-4 MuiGrid-item MuiGrid-grid-sm-8 MuiGrid-grid-md-6 MuiGrid-grid-lg-3 MuiGrid-grid-xl-3']";
lblAddNewPlanUnhideText = "//p[@id='alert-dialog-description']";
lblAddNewPlanHideText = "//p[@id='alert-dialog-description']";
lblAddNewPlanUnhideSuccessfully = "//span[@class='my-auto ml-1 mr-3']";
lblAddNewPlanHideSuccessfully = "//span[@class='my-auto ml-1 mr-3']";
lblAddNewPlanAddonRowGridCount = "//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4']";
txtAddNewPlanWindowPlanName = "//input[@name='Name']";
txtAddNewPlanWindowFootNote = "//input[@name='footNote']";
txtAddNewPlanWindowMonthlyPrice = "//input[@name='Price']";
txtAddNewPlanWindowAnnualPrice = "//input[@name='YearlyPrice']";
txtAddNewPlanWindowValue = "//input[@name='Value' and @type='text' and @value='']";
txtPlanSearch = "//input[@type='text']";
txtAddNewPlanWindowSelectGracePeriod = "//input[@name='graceperiod']";
txtAddNewPlanWindowSelectDashboard = "//input[@name='dashboard']";
txtAddNewPlanWindowSelectProduct = "//input[@name='product']";
txtAddNewPlanWindowSelectPlanType = "//input[@name='PlanType']";
txtAddNewPlanWindowIsPrivate = "//input[@name='Privacy']";
txtAddNewPlanWindowTierOccurrence = "//input[@name='TierOccurrence']";
txtAddNewPlanWindowPrice = "//input[@name='Price']";
txtAddNewPlanWindowSelectCountry = "//input[@name='country']";
txtAddNewPlanWindowSelectFeatureType = "//input[@name='Type' and @value='']";
txtAddNewPlanWindowSelectFeature = "//input[@name='Label' and @value='']";
txtAddNewPlanWindowSelectOrganization = "//input[@name='PlanType' and @value='']";
chkAddNewPlanWindowUnlimited = "//input[@name='Value' and @type='checkbox']";

clickOnPlans() {
    cy.wait(3000);
    cy.xpath(this.btnTiers).click();
}

clickOnTiersAddNewPlan() {
    cy.wait(3000);
    cy.xpath(this.btnTiersAddNewPlan).click();
}

clickOnAddNewPlanCancel() {
    cy.wait(3000);
    cy.xpath(this.btnAddNewPlanWindowCancel).click();
}

clickOnAddNewPlanSubmit() {
    cy.wait(3000);
    cy.xpath(this.btnAddNewPlanWindowSubmit).click();
}

clickOnAddNewPlanUnlimited () {
    cy.wait(3000);
    cy.xpath(this.chkAddNewPlanWindowUnlimited).click();
}

clickOnAddNewPlanNewFeature () {
    cy.wait(3000);
    cy.xpath(this.btnAddNewPlanAddNewFeature).click();
}

clickOnAddNewPlanDeleteFeature () {
    cy.wait(3000);
    cy.xpath(this.btnAddNewPlanDeleteFeature).click();
}

clickOnKebabMenu () {
    cy.wait(3000);
    cy.xpath(this.btnKebabMenu).click();
}

clickOnKebabMenuEdit () {
    cy.wait(3000);
    cy.xpath(this.btnKebabEdit).click();
}

clickOnKebabMenuDuplicate () {
    cy.wait(3000);
    cy.xpath(this.btnKebabDuplicate).click();
}

clickOnKebabMenuHide () {
    cy.wait(3000);
    cy.xpath(this.btnKebabHide).click();
}

clickOnKebabMenuUnhide () {
    cy.wait(3000);
    cy.xpath(this.btnKebabUnhide).click();
}

clickOnUnhideWindowUnhideButton () {
    cy.wait(3000);
    cy.xpath(this.btnUnhideWindowUnhide).click();
}

clickOnUnhideWindowCancelButton () {
    cy.wait(3000);
    cy.xpath(this.btnUnhideWindowCancel).click();
}

clickOnHideWindowHideButton () {
    cy.wait(3000);
    cy.xpath(this.btnHideWindowHide).click();
}

clickOnhideWindowCancelButton () {
    cy.wait(3000);
    cy.xpath(this.btnHideWindowCancel).click();
}

clickEditWindowCancelButton () {
    cy.wait(3000);
    cy.xpath(this.btnEditWindowCancel).click();
}

clickEditWindowSaveButton () {
    cy.wait(3000);
    cy.xpath(this.btnEditWindowSave).click();
}

clickDuplicateWindowCancelButton () {
    cy.wait(3000);
    cy.xpath(this.btnDuplicateWindowCancel).click();
}

clickDuplicateWindowDuplicatePlanButton () {
    cy.wait(3000);
    cy.xpath(this.btnDuplicateWindowDuplicatePlan).click();
}

setAddNewPlanNameBlank () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowPlanName).clear().type(' ');
}

setAddNewPlanSelectProductBlank () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectProduct).clear().type(' ').type("{backspace}");
}

setAddNewPlanSelectPlanTypeBlank () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectPlanType).clear().type(' ').type("{backspace}");
}

setAddNewPlanName (planName) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowPlanName).clear().type(planName);
}

setAddNewPlanFootNote (footNote) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowFootNote).clear().type(footNote);
}

setAddNewPlanSelectPlanType (selectPlanType) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectPlanType).clear().type(selectPlanType).type("{downarrow}").type("{Enter}");
}

setAddNewPlanSelectGracePeriod (selectGracePeriod) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectGracePeriod).clear().type(selectGracePeriod).type("{downarrow}").type("{Enter}");
}

setAddNewPlanSelectDashboard (selectDashboard) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectDashboard).clear().type(selectDashboard).type("{downarrow}").type("{Enter}");
}

setAddNewPlanSelectProduct (selectProduct) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectProduct).clear().type(selectProduct).type("{downarrow}").type("{Enter}");
}

setAddNewPlanIsPrivate (isPrivate) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowIsPrivate).clear().type(isPrivate).type("{downarrow}").type("{Enter}");
}

setAddNewPlanSelectTierOccurrence (selectTierOccurrence) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowTierOccurrence).clear().type(selectTierOccurrence).type("{downarrow}").type("{Enter}");
}

setAddNewPlanSelectCountry (selectCountry) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectCountry).clear().type(selectCountry).type("{downarrow}").type("{Enter}");
}

setAddNewPlanSelectFeatureType (selectFeatureType) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectFeatureType).clear().type(selectFeatureType).type("{downarrow}").type("{Enter}");
}

setAddNewPlanSelectFeature (selectFeature) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectFeature).clear().type(selectFeature).type("{downarrow}").type("{Enter}");
}

setAddNewPlanSelectOrganization (selectOrganization) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectOrganization).clear().type('ON').type("{downarrow}").type("{downarrow}").type("{downarrow}").type("{downarrow}").type("{Enter}");
}


setAddNewPlanMonthlyPrice (monthlyPrice) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowMonthlyPrice).clear().type(monthlyPrice);
}

setAddNewPlanAnnualPrice (AnnualPrice) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowAnnualPrice).clear().type(AnnualPrice);
}

setAddNewPlanValue (value) {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowValue).clear().type(value);
}

setAddNewPlanSearchBox (searchbox) {
    cy.wait(3000);
    cy.xpath(this.txtPlanSearch).clear().type(searchbox);
}

verifyPlansPage() {
    cy.wait(3000);
    cy.url().should('eq', 'https://uat-falkonsms-fe.azurewebsites.net/sysadmin-plans');
    cy.wait(3000);
}

verifyTiersAddNewPlanTitle () {
    cy.wait(3000);
    cy.xpath(this.lblTiersAddNewPlanTitle).should('have.text', 'Add New Plan');
    cy.wait(3000);
}

verifyAddNewPlanNameBlankMessage () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanNameBlankMessage).should('have.text', 'Name cannot be blank');
    cy.wait(3000);
}

verifyAddNewPlanSelectProductBlankMessage () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanSelectProductBlankMessage).should('have.text', 'Required*');
    cy.wait(3000);
}

verifyAddNewPlanSelectPlanTypeBlankMessage () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanSelectPlanTypeBlankMessage).should('have.text', 'Required*');
    cy.wait(3000);
}

verifyAddNewPlanNameCharacterLimit () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanNameExceedLimit).should('have.text', 'Name should not exceed 30 characters');
    cy.wait(3000);
}

verifyAddNewPlanFootNoteCharacterLimit () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanFootNoteExceedLimit).should('have.text', 'Foot Name should not exceed 30 characters');
    cy.wait(3000);
}

verifyAddNewPlanSelectCountryDropdown () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectCountry).should('be.visible');
    cy.wait(3000);
}

verifyAddNewPlanMonthlyPrice () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowMonthlyPrice).should('be.visible');
    cy.wait(3000);
}

verifyAddNewPlanAnnualPrice () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowAnnualPrice).should('be.visible');
    cy.wait(3000);
}

verifyAddNewPlanSelectFeatureType () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectFeatureType).should('be.visible');
    cy.wait(3000);
}

verifyAddNewPlanSelectFeature () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowSelectFeature).should('be.visible');
    cy.wait(3000);
}

verifyAddNewPlanValue () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowValue).should('be.visible');
    cy.wait(3000);
}

verifyAddNewPlanTierOccurrence () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowTierOccurrence).should('be.visible');
    cy.wait(3000);
}

verifyAddNewPlanPrice () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowPrice).should('be.visible');
    cy.wait(3000);
}

verifyAddNewPlanUnlimited () {
    cy.wait(3000);
    cy.xpath(this.chkAddNewPlanWindowUnlimited).should('be.visible');
    cy.wait(3000);
}

verifyAddNewPlanAddPlanButtonIsDisabled () {
    cy.wait(3000);
    cy.xpath(this.btnAddNewPlanWindowSubmit).should('be.disabled');
    cy.wait(3000);
}

verifyAddNewPlanAddedSuccessfully () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanAddedSuccessfully).should('contain', 'added successfully!');
    cy.wait(3000);
}

verifyAddNewPlanEditedSuccessfully () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanEditedSuccessfully).should('contain', 'updated successfully!');
    cy.wait(3000);
}

verifyAddNewPlanDuplicatedSuccessfully () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanDuplicatedSuccessfully).should('contain', 'added successfully!');
    cy.wait(3000);
}

verifyAddNewPlanRowGridCount () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanRowGridCount).should('have.length', '1');
    cy.wait(3000);
}

verifyAddNewPlanAddonRowGridCount () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanAddonRowGridCount).should('have.length', '1');
    cy.wait(3000);
}

verifyAddNewPlanWindowPlanNameIsDisabled () {
    cy.wait(3000);
    cy.xpath(this.txtAddNewPlanWindowPlanName).should('have.attr', 'disabled');
    cy.wait(3000);
}

verifyAddNewPlanWindowUnhideText () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanUnhideText).should('have.text', 'Are you sure you want to unhide this Plan?');
    cy.wait(3000);
}

verifyAddNewPlanWindowHideText () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanHideText).should('have.text', 'Are you sure you want to hide this Plan?');
    cy.wait(3000);
}

verifyAddNewPlanUnhideSuccessfullyText () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanUnhideSuccessfully).should('contain', 'unhide successfully!');
    cy.wait(3000);
}

verifyAddNewPlanHideSuccessfullyText () {
    cy.wait(3000);
    cy.xpath(this.lblAddNewPlanHideSuccessfully).should('contain', 'hide successfully!');
    cy.wait(3000);
}

randomStringUpperCaseGenerator(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 1; i <= length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

randomStringLowerCaseGenerator(length) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 1; i <= length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

randomNumberGenerator(length) {
    var text = "";
    var possible = "0123456789";
    for (var i = 1; i <= length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

}

export default Plan
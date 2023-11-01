class Organization {

    btnOrganization = "//div[text()='Organizations']";
    btnAddOrganization = "//span[text()='Add Organization']";
    btnAddOrganizationSave = "//span[text()='Save']";
    btnAddOrganizationCancel = "//span[text()='Cancel']";
    btnKebabMenu = "//span[@class='c-pointer']";
    btnKebabMenuEdit = "//span[text()='Edit']";
    btnKebabMenuDisable = "//span[text()='Disable']";
    btnKebabMenuEnable = "//span[text()='Enable']";
    btnKebabMenuSettings = "//span[text()='Settings']";
    btnDisableWindowDisable = "//span[text()='Disable' and @class='my-auto ']";
    btnEnableWindowEnable = "//span[text()='Enable' and @class='my-auto ']";
    btnDisableWindowCancel = "//span[text()='Cancel']";
    btnEnableWindowCancel = "//span[text()='Cancel']";
    btn2FactorAuthenticationCheckbox = "//button[@class='switch']";
    btn2FactorAuthenticationTurnOff = "//span[text() = 'TURN OFF']";
    btn2FactorAuthenticationTurnOffCancel = "//span[@class = 'ml-auto']";
    lblAddOrganizationTitle = "//div[@class='h2-regular color-display-title d-flex']";
    lblAddOrganizationNameMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'Name')]";
    lblAddOrganizationReferenceMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'Reference')]";
    lblAddOrganizationEmailMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'Email')]";
    lblAddOrganizationMobileNumberMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'Mobile')]";
    lblAddOrganizationIndustryMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'Industry')]";
    lblAddOrganizationHouseNumberMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'House')]";
    lblAddOrganizationStreetNameMessage = "//p[@class='MuiFormHelperText-root  h5-regular color-primary-danger t-align-right' and contains(text(), 'Address')]";
    lblAddOrganizationZipCodeMessage = "//p[@class='MuiFormHelperText-root  h5-regular color-primary-danger t-align-right' and contains(text(), 'Zipcode')]";
    lblAddOrganizationCityMessage = "//p[@class='MuiFormHelperText-root  h5-regular color-primary-danger t-align-right' and contains(text(), 'City')]";
    lblAddOrganizationStateMessage = "//p[@class='MuiFormHelperText-root  h5-regular color-primary-danger t-align-right' and contains(text(), 'State')]";
    lblAddOrganizationCountryMessage = "//p[@class='MuiFormHelperText-root  h5-regular color-primary-danger t-align-right' and contains(text(), 'Country')]";
    lblAddOrganizationSuccessMessage = "//span[@class='my-auto ml-1 mr-3']";
    lblAddOrganizationrowCountGrid = "//span[@class='c-pointer']";
    lblAddOrganizationDuplicateReferenceMessage = "//span[contains(text(),'Reference ')]";
    lblAddOrganizationDuplicateNameMessage = "//span[contains(text(),'Organization Name ')]";
    lblAddOrganizationEditWindow = "//div[@class='h2-regular color-display-title d-flex']";
    lblAddOrganizationEnableStatus = "//span[@class='status-variant-active undefined']";
    lblAddOrganizationDisableStatus = "//span[@class='status-variant-danger undefined']";
    lblAddOrganizationDisableWindow = "//p[@id='alert-dialog-description']";
    lblAddOrganizationEnableWindow = "//p[@id='alert-dialog-description']";
    lblDisabledSuccessfullyMessage = "//span[@class='my-auto ml-1 mr-3']";
    lblEnabledSuccessfullyMessage = "//span[@class='my-auto ml-1 mr-3']";
    lbl2FactorAuthenticationText = "//p[@class='h3-regular color-settings-items-heading t-align-left']";
    lbl2FactorAuthenticationChecked = "//span[@class='checked']";
    lbl2FactorAuthenticationTurnOffText = "//p[@id='alert-dialog-description']";
    lbl2FactorAuthenticationTurnOffSuccessMessage = "//span[@class = 'my-auto ml-1 mr-3']";
    lbl2FactorAuthenticationUnChecked = "//span[@class='un-checked']";
    txtAddOrganizationName = "//input[@name='Name']";
    txtAddOrganizationReference = "//input[@name='Reference']";
    txtAddOrganizationEmail = "//input[@name='Email']";
    txtAddOrganizationMobileNumber = "//input[@name='MobileNumber']";
    txtAddOrganizationIndustry = "//input[@name='industry']";
    txtAddOrganizationHouseNumber = "//input[@name='HouseNumber']";
    txtAddOrganizationStreetName = "//input[@name='Address']";
    txtAddOrganizationZipCode = "//input[@name='ZipCode']";
    txtAddOrganizationCity = "//input[@name='City']";
    txtAddOrganizationState = "//input[@name='state']";
    txtAddOrganizationCountry = "//input[@name='country']";
    txtOrganizationSearchBox = "//input[@type='text']";

    clearStorage () {
        cy.clearLocalStorage();
    }

    clickOnOrganizationButton () {
        cy.wait(3000);
        cy.xpath(this.btnOrganization).click();
    }

    clickOnAddOrganizationButton () {
        cy.wait(3000);
        cy.xpath(this.btnAddOrganization).click();
    }

    clickOnAddOrganizationSaveButton () {
        cy.wait(3000);
        cy.xpath(this.btnAddOrganizationSave).click();
    }

    clickOnAddOrganizationCancelButton () {
        cy.wait(3000);
        cy.xpath(this.btnAddOrganizationCancel).click();
    }

    clickOnKebabMenuButton () {
        cy.wait(3000);
        cy.xpath(this.btnKebabMenu).click();
    }

    clickOnKebabMenuEditButton () {
        cy.wait(3000);
        cy.xpath(this.btnKebabMenuEdit).click();
    }

    clickOnKebabMenuDisableButton () {
        cy.wait(3000);
        cy.xpath(this.btnKebabMenuDisable).click();
    }

    clickOnKebabMenuEnableButton () {
        cy.wait(3000);
        cy.xpath(this.btnKebabMenuEnable).click();
    }

    clickOnKebabMenuSettingsButton () {
        cy.wait(3000);
        cy.xpath(this.btnKebabMenuSettings).click();
    }

    clickOnDisableWindowDisable () {
        cy.wait(3000);
        cy.xpath(this.btnDisableWindowDisable).click();
    }

    clickOnEnableWindowEnable () {
        cy.wait(3000);
        cy.xpath(this.btnEnableWindowEnable).click();
    }

    clickOn2FactorAuthenticationCheckbox () {
        cy.wait(3000);
        cy.xpath(this.btn2FactorAuthenticationCheckbox).click();
    }

    clickOn2FactorAuthenticationTurnOffButton () {
        cy.wait(3000);
        cy.xpath(this.btn2FactorAuthenticationTurnOff).click();
    }

    clickOn2FactorAuthenticationTurnOffCancel () {
        cy.wait(3000);
        cy.xpath(this.btn2FactorAuthenticationTurnOffCancel).click();
    }

    setAddOrganizationName (addOrganizationName) {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationName).clear().type(addOrganizationName);
    }

    setAddOrganizationReference (addOrganizationReference) {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationReference).clear().type(addOrganizationReference);
    }

    setAddOrganizationEmail (addOrganizationEmail) {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationEmail).clear().type(addOrganizationEmail);
    }

    setAddOrganizationMobileNumber (addOrganizationMobileNumber) {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationMobileNumber).clear().type(addOrganizationMobileNumber);
    }

    setAddOrganizationIndustry () {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationIndustry).clear().type('Tech').type("{downarrow}").type("{Enter}");
    }

    setAddOrganizationHouseNumber (addOrganizationHouseNumber) {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationHouseNumber).clear().type(addOrganizationHouseNumber);
    }

    setAddOrganizationStreetName (addOrganizationStreetName) {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationStreetName).clear().type(addOrganizationStreetName);
    }

    setAddOrganizationZipCode (addOrganizationZipCode) {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationZipCode).clear().type(addOrganizationZipCode);
    }

    setAddOrganizationDuplicateName () {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationName).invoke('val').then ( (duplicateName) => {
            cy.wait(3000);
            cy.xpath(this.btnAddOrganizationCancel).click();
            cy.xpath(this.btnAddOrganization).click();
            cy.xpath(this.txtAddOrganizationName).clear().type(duplicateName);
        })
    }

    setAddOrganizationDuplicateReference () {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationReference).invoke('val').then ( (duplicateReference) => {
            cy.wait(3000);
            cy.xpath(this.btnAddOrganizationCancel).click();
            cy.xpath(this.btnAddOrganization).click();
            cy.xpath(this.txtAddOrganizationReference).clear().type(duplicateReference);
        })
    }

    verifyAddOrganizationTitle () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationTitle).should('have.text', 'Add Organization');
        cy.wait(3000);
    }

    verifyAddOrganizationNameBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationNameMessage).should('have.text', 'Name cannot be blank');
    }

    verifyOrganizationPage () {
        cy.wait(3000);
        cy.url().should('eq', 'https://uat-falkonsms-fe.azurewebsites.net/organizations');
        cy.wait(3000);
    }

    verifyAddOrganizationReferenceBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationReferenceMessage).should('have.text', 'Reference cannot be blank');
    }

    verifyAddOrganizationEmailBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationEmailMessage).should('have.text', 'Email cannot be blank');
    }
    
    verifyAddOrganizationMobileNumberBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationMobileNumberMessage).should('have.text', 'Mobile Number cannot be blank');
    }

    verifyAddOrganizationIndustryBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationIndustryMessage).should('have.text', 'Industry cannot be blank');
    }

    verifyAddOrganizationHouseNumberBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationHouseNumberMessage).should('have.text', 'House number cannot be blank');
    }

    verifyAddOrganizationStreetNameBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationStreetNameMessage).should('have.text', 'Address cannot be blank');
    }

    verifyAddOrganizationZipCodeBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationZipCodeMessage).should('have.text', 'Zipcode cannot be blank');
    }

    verifyAddOrganizationCityBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationCityMessage).should('have.text', 'City cannot be blank');
    }

    verifyAddOrganizationStateBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationStateMessage).should('have.text', 'State cannot be blank');
    }

    verifyAddOrganizationCountryBlank () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationCountryMessage).should('have.text', 'Country cannot be blank');
        cy.wait(3000);
    }

    verifyAddOrganizationNameCharacterLimit () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationNameMessage).should('have.text', 'Name should not exceed 30 characters');
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationName).clear();
    }

    verifyAddOrganizationReferenceCharacterLimit () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationReferenceMessage).should('have.text', 'Reference should not exceed 10 characters');
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationReference).clear();
    }

    verifyAddOrganizationEmailInvalidFormat () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationEmailMessage).should('have.text', 'Invalid Email');
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationEmail).clear();
    }

    verifyAddOrganizationMobileNumberInvalidFormat () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationMobileNumberMessage).should('have.text', 'Invalid Mobile Number');
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationMobileNumber).clear();
    }

    verifyAddOrganizationCityStateCountry () {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationCity).should('have.attr', 'value', 'Katy');
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationState).should('have.attr', 'value', 'Texas');
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationCountry).should('have.attr', 'value', 'United States');
    }

    verifyAddOrganizationSuccessMessage () {
        cy.xpath(this.txtAddOrganizationName).invoke('val').then ( (nameValue) => {
            cy.wait(3000);
            cy.xpath(this.lblAddOrganizationSuccessMessage).should('contain', 'added successfully!')
            cy.xpath(this.txtOrganizationSearchBox).clear().type(nameValue);
            cy.wait(3000);
            cy.xpath(this.lblAddOrganizationrowCountGrid).should('have.length', "1");
            cy.wait(3000);
        }
        )
    }

    verifyAddOrganizationEditSuccessMessage () {
        cy.xpath(this.txtAddOrganizationName).invoke('val').then ( (nameValue) => {
            cy.wait(3000);
            cy.xpath(this.lblAddOrganizationSuccessMessage).should('contain', 'updated successfully!')
            cy.xpath(this.txtOrganizationSearchBox).clear().type(nameValue);
            cy.wait(3000);
            cy.xpath(this.lblAddOrganizationrowCountGrid).should('have.length', "1");
            cy.wait(3000);
        }
        )
    }

    verifyAddOrganizationDuplicateNameMessage () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationDuplicateNameMessage).should('contain', 'Organization Name ');
        cy.wait(3000);
    }

    verifyAddOrganizationDuplicateReferenceMessage () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationDuplicateReferenceMessage).should('contain', 'Reference ');
        cy.wait(3000);
    }

    verifyAddOrganizationEditWindowTitle () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationEditWindow).should('have.text', 'Edit Organization');
    }

    verifyAddOrganizationEditWindowReferenceDisabled () {
        cy.wait(3000);
        cy.xpath(this.txtAddOrganizationReference).should('have.attr', 'disabled');
    }

    verifyAddOrganizationEnabledStatus () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationEnableStatus).should('have.text', 'Enable');
    }

    verifyAddOrganizationDisabledStatus () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationDisableStatus).should('have.text', 'Disable');
    }

    verifyAddOrganizationDisableWindowText () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationDisableWindow).should('have.text', 'Are you sure you want to disable the organization?');
    }

    verifyAddOrganizationEnableWindowText () {
        cy.wait(3000);
        cy.xpath(this.lblAddOrganizationEnableWindow).should('have.text', 'Are you sure you want to enable the organization?');
    }

    verifyDisableSuccessfullyMessage () {
        cy.wait(3000);
        cy.xpath(this.lblDisabledSuccessfullyMessage).should('contain', 'disabled successfully!');
    }

    verifyEnableSuccessfullyMessage () {
        cy.wait(3000);
        cy.xpath(this.lblEnabledSuccessfullyMessage).should('contain', 'enabled successfully!');
    }

    verify2FactorAuthenticationText () {
        cy.wait(3000);
        cy.xpath(this.lbl2FactorAuthenticationText).should('have.text', '2-factor authentication');
    }

    verify2FactorAuthenticationCheckedStatus () {
        cy.wait(3000);
        cy.xpath(this.lbl2FactorAuthenticationChecked).should('have.attr', 'class', 'checked');
    }

    verify2FactorAuthenticationUnCheckedStatus () {
        cy.wait(3000);
        cy.xpath(this.lbl2FactorAuthenticationUnChecked).should('have.attr', 'class', 'un-checked');
    }

    verify2FactorAuthenticationTurnOffText () {
        cy.wait(3000);
        cy.xpath(this.lbl2FactorAuthenticationTurnOffText).should('have.text', 'Are you sure you want to disable 2-factor authentication? It will disable 2 - factor authentication for all the users in your organization');
    }

    verify2FactorAuthenticationTurnOffSuccessMessage () {
        cy.wait(3000);
        cy.xpath(this.lbl2FactorAuthenticationTurnOffSuccessMessage).should('contain', '2-factor authentication is disabled for');
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

export default Organization
class PhoneNumber {

    time = 1000;

    btnOrganizationNavigationMenu = "//div[text()='Organizations']";
    btnPhoneNumbersNavigationMenu = "//div[text()='Phone Numbers']";
    btnAddPhoneNumber = "//span[text()='Add Phone Number']";
    btnTollFreeTexting = "//p[text()='Toll free Texting']";
    btnTollFreeTextingNext = "//span[text()='Next']";
    btnRegistrationAddPhoneNumber = "//span[text() = 'Add Phone Number']";
    btnSelectPlanMonthly = "//span[text() = 'Monthly']";
    btnSelectPlanAnnually = "//span[text() = 'Annual']";
    txtTollFreeTextingName = "//input[@name='Name']";
    txtTollFreeTextingPhoneNumber = "//input[@name='PhoneNumber']";
    txtTollFreeTextingOrganization = "//input[@name='OrganizationID']";
    txtRegistrationFirstName = "//input[@name='FirstName']";
    txtRegistrationLastName = "//input[@name='LastName']";
    txtRegistrationZipcode = "//input[@name='ZipCode']";
    txtRegistrationState = "//input[@name='state']";
    txtRegistrationCity = "//input[@name='City']";
    txtRegistrationCountry = "//input[@name='country']";
    txtRegistrationHouseNumber = "//input[@name='HouseNumber']";
    txtRegistrationStreetName = "//input[@name='StreetName']";
    lblRegistrationFirstNameValidationMessage = "//p[@class='MuiFormHelperText-root  h5-regular color-primary-danger t-align-right' and contains(text(), 'First Name')]";
    lblRegistrationStateValidationMessage = "//p[@class='MuiFormHelperText-root  h5-regular color-primary-danger t-align-right' and contains(text(), 'State')]";
    lblRegistrationCountryValidationMessage = "//p[@class='MuiFormHelperText-root  h5-regular color-primary-danger t-align-right' and contains(text(), 'Country')]";
    lblTollFreeTextingNameValidationMessage = "//p[@class='MuiFormHelperText-root h6-regular  color-primary-danger t-align-right' and contains(text(), 'Name')]";
    lblTollFreeTextingPhoneNumberValidationMessage = "//p[@class='MuiFormHelperText-root h6-regular  color-primary-danger t-align-right' and contains(text(), 'Phone Number')]";
    lblTollFreeTextingOrganizationValidationMessage = "//p[@class='MuiFormHelperText-root h6-regular  color-primary-danger t-align-right' and contains(text(), 'Organization')]";
    lblAddPhoneNumberWindowText = "//span[@class='h1-semibold color-header-title-font w-space']";
    lblRegistrationLastNameValidationMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'Last Name')]";
    lblRegistrationHouseNumberValidationMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'House number')]";
    lblRegistrationStreetNameValidationMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'Street name')]";
    lblRegistrationZipCodeValidationMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'Zipcode')]";
    lblRegistrationCityValidationMessage = "//p[@class='MuiFormHelperText-root h5-regular color-primary-danger t-align-right' and contains(text(), 'City')]";
    lblRegistrationPopupMessage = "//span[@class='my-auto ml-1 mr-3']";
    lblRegistrationStatusMessage = "//p[@class='h1-bold color-registration-title m-0']";

    clickOnOrganizationButton () {
        cy.xpath(this.btnOrganizationNavigationMenu).click();
        cy.wait(this.time);
    }

    clickOnPhoneNumbersButton () {
        cy.xpath(this.btnPhoneNumbersNavigationMenu).click();
        cy.wait(this.time);
    }

    clickOnAddPhoneNumberButton () {
        cy.xpath(this.btnAddPhoneNumber).click();
        cy.wait(this.time);
    }

    clickOnAddPhoneNumberTollFreeTexting () {
        cy.xpath(this.btnTollFreeTexting).click();
        cy.wait(this.time);
    }

    clickOnAddPhoneNumberNextButton () {
        cy.xpath(this.btnTollFreeTextingNext).click();
        cy.wait(this.time);
    }

    clickOnRegistrationAddPhoneNumberButton () {
        cy.xpath(this.btnRegistrationAddPhoneNumber).click();
        cy.wait(this.time);
    }

    clickOnSelectPlanAnnually () {
        cy.xpath(this.btnSelectPlanAnnually).click();
        cy.wait(this.time);
    }

    clickOnSelectPlanMonthly () {
        cy.xpath(this.btnSelectPlanMonthly).click();
        cy.wait(this.time);
    }

    setTollFreeTextingName (name) {
        cy.xpath(this.txtTollFreeTextingName).clear().type(name);
        cy.wait(this.time);
    }

    setTollFreeTextingPhoneNumber (phoneNumber) {
        cy.xpath(this.txtTollFreeTextingPhoneNumber).clear().type(phoneNumber);
        cy.wait(this.time);
    }

    setTollFreeTextingOrganization (organization) {
        cy.xpath(this.txtTollFreeTextingOrganization).clear().type(organization).type('{downarrow}').type('{Enter}');
        cy.wait(this.time);
    }

    setRegistrationFirstName (firstname) {
        cy.xpath(this.txtRegistrationFirstName).clear().type(firstname);
        cy.wait(this.time);
    }

    setRegistrationLastName (lastname) {
        cy.xpath(this.txtRegistrationLastName).clear().type(lastname);
        cy.wait(this.time);
    }

    setRegistrationZipcode (zipcode) {
        cy.xpath(this.txtRegistrationZipcode).clear().type(zipcode);
        cy.wait(this.time);
    }

    setRegistrationHouseNumber (housenumber) {
        cy.xpath(this.txtRegistrationHouseNumber).clear().type(housenumber);
        cy.wait(this.time);
    }

    setRegistrationStreetName (streetname) {
        cy.xpath(this.txtRegistrationStreetName).clear().type(streetname);
        cy.wait(this.time);
    }

    verifyPhoneNumbersPageUrl () {
        cy.url().should('eq', 'https://uat-falkonsms-fe.azurewebsites.net/phone-numbers');
        cy.wait(this.time);
    }

    verifyAddPhoneNumberSelectionPage () {
        cy.xpath(this.lblAddPhoneNumberWindowText).should('have.text', 'Select Product');
        cy.wait(this.time);
    }

    verifyAddPhoneNumberTollFreeTextingPage () {
        cy.xpath(this.lblAddPhoneNumberWindowText).should('have.text', 'Toll-Free Texting');
        cy.wait(this.time);
    }

    verifyAddPhoneNumberRegistrationPage () {
        cy.xpath(this.lblAddPhoneNumberWindowText).should('have.text', 'Registration');
        cy.wait(this.time);
    }

    verifyAddPhoneNumberSelectPlanPage () {
        cy.wait(8000);
        cy.xpath(this.lblAddPhoneNumberWindowText).should('have.text', 'Select Plan');
        cy.wait(this.time);
    }

    verifyTollFreeTextingNameBlank () {
        cy.xpath(this.lblTollFreeTextingNameValidationMessage).should('have.text', 'Name cannot be blank');
        cy.wait(this.time);
    }

    verifyTollFreeTextingPhoneNumberBlank () {
        cy.xpath(this.lblTollFreeTextingPhoneNumberValidationMessage).should('have.text', 'Phone Number cannot be blank');
        cy.wait(this.time);
    }

    verifyTollFreeTextingNameCharacterLimit () {
        cy.xpath(this.lblTollFreeTextingNameValidationMessage).should('have.text', 'Name should not exceed 30 characters');
        cy.wait(this.time);
    }

    verifyTollFreeTextingPhoneNumberInvalidEntry () {
        cy.xpath(this.lblTollFreeTextingPhoneNumberValidationMessage).should('have.text', 'Invalid Phone Number');
        cy.wait(this.time);
    }

    verifyTollFreeTextingOrganizationBlank () {
        cy.xpath(this.lblTollFreeTextingOrganizationValidationMessage).should('have.text', 'Organization cannot be blank');
        cy.wait(this.time);
    }

    verifyRegistraionFirstNameBlank () {
        cy.xpath(this.lblRegistrationFirstNameValidationMessage).should('have.text', 'First Name cannot be blank');
        cy.wait(this.time);
    }

    verifyRegistraionLastNameBlank () {
        cy.xpath(this.lblRegistrationLastNameValidationMessage).should('have.text', 'Last Name cannot be blank');
        cy.wait(this.time);
    }

    verifyRegistraionHouseNumberBlank () {
        cy.xpath(this.lblRegistrationHouseNumberValidationMessage).should('have.text', 'House number cannot be blank');
        cy.wait(this.time);
    }

    verifyRegistraionStreetNameBlank () {
        cy.xpath(this.lblRegistrationStreetNameValidationMessage).should('have.text', 'Street name cannot be blank');
        cy.wait(this.time);
    }

    verifyRegistraionZipCodeBlank () {
        cy.xpath(this.lblRegistrationZipCodeValidationMessage).should('have.text', 'Zipcode cannot be blank');
        cy.wait(this.time);
    }

    verifyRegistraionCityBlank () {
        cy.xpath(this.lblRegistrationCityValidationMessage).should('have.text', 'City cannot be blank');
        cy.wait(this.time);
    }

    verifyRegistraionStateBlank () {
        cy.xpath(this.lblRegistrationStateValidationMessage).should('have.text', 'State cannot be blank');
        cy.wait(this.time);
    }

    verifyRegistraionCountryBlank () {
        cy.xpath(this.lblRegistrationCountryValidationMessage).should('have.text', 'Country cannot be blank');
        cy.wait(this.time);
    }

    verifyRegistraionCityValue () {
        cy.xpath(this.txtRegistrationCity).should('have.value', 'Katy');
        cy.wait(this.time);
    }

    verifyRegistraionStateValue () {
        cy.xpath(this.txtRegistrationState).should('have.value', 'Texas');
        cy.wait(this.time);
    }

    verifyRegistraionCountryValue () {
        cy.xpath(this.txtRegistrationCountry).should('have.value', 'United States');
        cy.wait(this.time);
    }

    verifyRegistrationFirstNameCharacterLimit () {
        cy.xpath(this.lblRegistrationFirstNameValidationMessage).should('have.text', 'First Name should not exceed 20 characters');
        cy.wait(this.time);
    }

    verifyRegistrationLastNameCharacterLimit () {
        cy.xpath(this.lblRegistrationLastNameValidationMessage).should('have.text', 'Last Name should not exceed 20 characters');
        cy.wait(this.time);
    }

    verifyRegistrationInvalidZipCode () {
        cy.xpath(this.lblRegistrationPopupMessage).should('have.text', 'Please enter valid US/Canada Zipcode');
        cy.wait(this.time);
    }

    verifyRegistrationStatusMessage () {
        cy.wait(3000);
        cy.xpath(this.lblRegistrationStatusMessage).should ('have.text', 'We are registering your number!');
        cy.wait(this.time);
    }

}

export default PhoneNumber
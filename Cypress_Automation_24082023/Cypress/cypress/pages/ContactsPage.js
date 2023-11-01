class Contacts {

    contactsMenuButton = "//div[text() = 'Contacts']";
    addContactButton = "//span[text() = 'Add Contact']";
    addContactWindow = "//span[text() = 'Add Contact']/parent::div/span";
    firstNameBlank = "//p[text() = 'First Name cannot be blank']";
    phoneNumberBlank = "//p[text() = 'Phone Number cannot be blank']";
    saveButton = "//span[text() = 'Save']";
    firstName = "//input[@name='FirstName']";
    lastName = "//input[@name='LastName']";
    firstNameLimit = "//p[text()='First Name should not exceed 30 characters']";
    lastNameLimit = "//p[text()='Last Name should not exceed 30 characters']";
    phoneNumber = "//input[@name='PhoneNumber']";
    invalidPhoneNumber = "//p[text()='Invalid Phone Number']";
    email = "//input[@name='Email']";
    invalidEmail = "//p[text()='Invalid Email']";
    addContactWindowCancelButton = "//span[text()='Cancel']";
    groupsButton = "//button[@title='Open']";
    contactAddedMessage = "//span[contains(text(), 'added successfully!')]";
    contactUpdatedMessage = "//span[contains(text(), 'updated successfully!')]";
    dashboardMenuButton = "//div[text() = 'Dashboard']";
    addContactsSearchTextbox = "//input[@placeholder='Find a Contact...']";
    rowCountGrid = "//span[@class='my-auto']";
    downloadMenuButton = "//button[@tabindex='7']";
    downloadContactsButton = "//span[text()='Download Contacts']";
    downloadSuccessMessage = "//span[text()='Contacts downloaded successfully']";
    gridKebabMenuButton = "//span[@class='c-pointer']";
    gridKebabMenuEditButton = "//span[text()='Edit']";
    gridKebabMenuBlockButton = "//span[text()='Block']";
    gridKebabMenuShareButton = "//span[text()='Share']";
    blockButtonOnConfirmationPage = "//span[text() = 'Block']/parent::span/span";
    blockConfirmationPage = "//p[text() = 'You will no longer receive messages from this contact. Are you sure you want to block this contact?']";
    blockStatus = "//span[text() = 'Blocked']";
    activeStatus = "//span[text() = 'Active']"
    profileMenuArrowButton = "//div[@class='avatar my-auto']/parent::button/div[2]/span";
    profileMenuSettingsButton = "//span[contains(text(), 'Settings')]";
    blockedStatusButton = "//p[text() = 'Blocked']";
    blockedStatusGridCount = "//div[@class = 'ag-center-cols-container']/div";
    blockedCheckbox = "//div[@ref='eCheckbox']/div[2]/input";
    UnblockStatusButton = "//span[text() = 'Unblock']";
    sharePhoneNumberDropdownOpenButton = "//button[@title='Open']";
    sharePhoneNumberDropdownCloseButton = "//button[@title='Close']";
    sharePhoneNumberInputField = "//input[@name='PhoneNumbers']";
    sharePhoneNumberShareButton = "//span[text()='Share']/parent::span/span";
    sharePhoneNumberSuccessMessage = "//span[text()='Contact shared successfully']";
    profileMenuSwitchPhoneNumberButton = "//span[text() = 'Switch Phone Number']";
    switchPhoneNumberInputField = "//input[@name='phoneNumberId']";
    switchPhoneNumberSubmitButton = "//span[text()='Switch Phone Number']";

    clickOnContactsMenuButton () {        
        cy.xpath(this.contactsMenuButton).click();
    }

    clickOnAddContactWindowButton () {
        cy.contains('Add Contact').click();
    }

    verifyAddContactWindow () {
        cy.xpath(this.addContactWindow).should('have.text', 'Add Contact');
    }

    verifyFirstNameBlankFieldsInAddContactsWindow () {
        cy.xpath(this.firstNameBlank).should('have.text', 'First Name cannot be blank');
    }

    verifyPhoneNumberBlankFieldsInAddContactsWindow () {
        cy.xpath(this.phoneNumberBlank).should('have.text', 'Phone Number cannot be blank');
    }

    verifyFirstNameExceedCharacterLimit () {
        cy.xpath(this.firstNameLimit).should('have.text', 'First Name should not exceed 30 characters');
    }

    verifyLastNameExceedCharacterLimit () {
        cy.xpath(this.lastNameLimit).should('have.text', 'Last Name should not exceed 30 characters');
    }

    verifyCharactersInPhoneNumber() {
        cy.xpath(this.phoneNumberBlank).should('have.text', 'Phone Number cannot be blank');
        cy.wait(3000);
        cy.xpath(this.phoneNumber).should('have.attr', 'value', '');
    }

    verifyLessThan11CharactersInPhoneNumber() {
        cy.xpath(this.invalidPhoneNumber).should('have.text', 'Invalid Phone Number');
    }

    verifyInvalidEmail() {
        cy.xpath(this.invalidEmail).should('have.text', 'Invalid Email');
    }

    inputFirstName (firstName) {
        cy.xpath(this.firstName).clear().type(firstName);
    }

    inputLastName (lastName) {
        cy.xpath(this.lastName).clear().type(lastName);
    }

    inputEmail (email) {
        cy.xpath(this.email).clear().type(email);
    }

    inputPhoneNumber (phoneNumber) {
        cy.xpath(this.phoneNumber).clear().type(phoneNumber);
    }

    clickOnAddContactButton() {
        cy.xpath(this.addContactButton).click();
    }

    clickOnAddWindowSaveButton() {
        cy.xpath(this.saveButton).click();
    }

    clickOnAddWindowCancelButton() {
        cy.xpath(this.addContactWindowCancelButton).click();
    }

    contactAddedSuccessfullyMessage () {
        cy.xpath(this.firstName).invoke('val').then((firstNameTextValue)=> {
            cy.xpath(this.saveButton).click();
            cy.wait(5000);
            cy.xpath(this.contactAddedMessage).should('contain', "added successfully!");
            cy.wait(3000);
            cy.xpath(this.addContactsSearchTextbox).clear().type(firstNameTextValue);
        }
      )
    }

    verifyGridRowCount1 () {
        cy.xpath(this.rowCountGrid).should('have.length', "1");
    }

    clickOnDownloadButton () {
        cy.xpath(this.downloadMenuButton).click();
        cy.wait(3000);
        cy.xpath(this.downloadContactsButton).click();
    }

    verifyDownloadSuccessMessage () {
        cy.xpath(this.downloadSuccessMessage).should('have.text', "Contacts downloaded successfully");
    }

    clickOnGridKebabMenuButton () {
        cy.xpath(this.gridKebabMenuButton).click();
    }

    clickOnGridKebabMenuEditButton () {
        cy.xpath(this.gridKebabMenuEditButton).click();
    }

    clickOnGridKebabMenuShareButton () {
        cy.xpath(this.gridKebabMenuShareButton).click();
    }

    verifyAddContactsEditAction () {        
        cy.xpath(this.firstName).invoke('val').then ( (firstNameValue) => {
            cy.xpath(this.saveButton).click();
            cy.wait(5000);
            cy.xpath(this.contactUpdatedMessage).should('contain', "updated successfully!");
            cy.wait(3000);
            cy.xpath(this.addContactsSearchTextbox).clear().type(firstNameValue);
            cy.wait(3000);
            cy.xpath(this.rowCountGrid).should('contain', firstNameValue);
        }
    )
    }

    clickOnGridKebabMenuBlockButton () {
        cy.xpath(this.gridKebabMenuBlockButton).click();
    }

    verifyAddContactsBlockAction() {
        cy.xpath(this.blockConfirmationPage).should('have.text', 'You will no longer receive messages from this contact. Are you sure you want to block this contact?');
        cy.wait(3000);
        cy.xpath(this.blockButtonOnConfirmationPage).click();
        cy.wait(3000);
        cy.xpath(this.blockStatus).should('have.text', 'Blocked');
        cy.wait(3000);
        cy.xpath(this.addContactsSearchTextbox).invoke('val').then ( (blockValue) => {
            cy.xpath(this.profileMenuArrowButton).click();
            cy.wait(3000);
            cy.xpath(this.profileMenuSettingsButton).click();
            cy.wait(3000);
            cy.xpath(this.blockedStatusButton).click();
            cy.wait(3000);
            cy.xpath(this.blockedStatusGridCount).should('have.length', '1');
            cy.wait(3000);
            cy.xpath(this.blockedCheckbox).click();
            cy.wait(3000);
            cy.xpath(this.UnblockStatusButton).click();
            cy.wait(3000);
            cy.xpath(this.contactsMenuButton).click();
            cy.wait(3000);
            cy.xpath(this.addContactsSearchTextbox).clear().type(blockValue);
            cy.wait(3000);
            cy.xpath(this.activeStatus).should('have.text', 'Active');
        }
      )
    }

    verifyAddContactsShareAction() {
            cy.xpath(this.gridKebabMenuButton).click();
            cy.wait(3000);
            cy.xpath(this.gridKebabMenuShareButton).click();
            cy.wait(3000);
            cy.xpath(this.sharePhoneNumberInputField).clear().type('QA Team Automation 2').type("{downarrow}").type("{Enter}");
            cy.wait(3000);
            cy.xpath(this.sharePhoneNumberDropdownCloseButton).click();
            cy.wait(3000);
            cy.xpath(this.sharePhoneNumberShareButton).click();
            cy.wait(3000);
            cy.xpath(this.sharePhoneNumberSuccessMessage).should('have.text', 'Contact shared successfully');
    }

    verifyAddContactsSwitchAction() {
        cy.xpath(this.addContactsSearchTextbox).invoke('val').then ( (switchValue) => {
            cy.xpath(this.profileMenuArrowButton).click();
            cy.wait(3000);
            cy.xpath(this.profileMenuSwitchPhoneNumberButton).click();
            cy.wait(3000);
            cy.xpath(this.switchPhoneNumberInputField).clear().type("{downarrow}").type("{Enter}");
            cy.wait(3000);
            cy.xpath(this.switchPhoneNumberSubmitButton).click();
            cy.wait(3000);
            cy.xpath(this.addContactsSearchTextbox).clear().type(switchValue);
            cy.wait(3000);
            cy.xpath(this.rowCountGrid).should('have.length', "1");
            cy.wait(3000);
            cy.xpath(this.profileMenuArrowButton).click();
            cy.wait(3000);
            cy.xpath(this.profileMenuSwitchPhoneNumberButton).click();
            cy.wait(3000);
            cy.xpath(this.switchPhoneNumberInputField).clear().type("{downarrow}").type("{Enter}");
            cy.wait(3000);
            cy.xpath(this.switchPhoneNumberSubmitButton).click();
        }
        )
    }

    randomStringGenerator(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i <= length; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return "TESTCP_" + text;
      }

    randomNumberGenerator(length) {
        var text = "";
        var possible = "0123456789";
        for (var i = 0; i <= length; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return "1" + text;
      }

    randomEmailGenerator(length) {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i <= length; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text + "@gmail.com";
      }

      randomInvalidEmailGenerator01(length) {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i <= length; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text + "gmail.com";
      }

      randomInvalidEmailGenerator02(length) {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i <= length; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text + "@gmailcom";
      }

    randomCharacterGenerator(length) {
        var text = "";
        var possible = "!@#$%^&*";
        for (var i = 0; i <= length; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
      }
}

export default Contacts;
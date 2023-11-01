class Users {

    time = 3000;
    btnUsersInNavigationMenu = "//div[text() = 'Users']";
    btnAddUser = "//span[text() = 'Add User']";
    btnAddUserSave = "//button[@type ='submit']";
    btnAddUserKebabMenu = "//span[@class='c-pointer']";
    btnAddUserKebabReInvite = "//span[text()='Re-invite']";
    btnAddUserKebabLock = "//span[text()='Lock']";
    btnAddUserKebabUnlock = "//span[text()='Unlock']";
    btnAddUserKebabEdit = "//span[text()='Edit']";
    btnAddUserKebabDelete = "//span[text()='Delete']";
    btnAddUserWindowReInvite = "//span[text()='Re-invite' and @class='my-auto ']";
    btnAddUserWindowLock = "//span[text()='lock' and @class='my-auto ']";
    btnAddUserWindowUnlock = "//span[text()='unlock' and @class='my-auto ']";
    btnAddUserWindowDelete = "//span[text()='delete' and @class='my-auto ']";
    txtAddUserFirstName = "//input[@name='FirstName']";
    txtAddUserLastName = "//input[@name='LastName']";
    txtAddUserEmail = "//input[@name='Email']";
    txtAddUserOrganization = "//input[@name='organizationId']";
    txtAddUserPhoneNumber = "//input[@name='phoneNumberId']";
    txtAddUserRole = "//input[@name='roleId']";
    txtUserSearchbox = "//input[@type='text']";
    lblAddUserWindowTitle = "//span[@class = 'h2-regular color-display-title']";
    lblAddUserFirstNameBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'First Name')]";
    lblAddUserLastNameBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Last Name')]";
    lblAddUserEmailBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Email')]";
    lblAddUserOrganizationBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Organization')]";
    lblAddUserPhoneNumberBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Phone number')]";
    lblAddUserRoleBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Role')]";
    lblAddUserFirstNameCharacterLimit = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'First')]";
    lblAddUserLastNameCharacterLimit = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Last')]";
    lblAddUserEmailValidationMessage = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Email')]";
    lblAddUserSuccessfullyMessage = "//span[@class='my-auto ml-1 mr-3']";
    lblAddUserRowGridCount = "//div[@id='customized-menu']";
    lblAddUserAlertWindow = "//p[@id='alert-dialog-description']";

    clickOnUsersButton () {
        cy.xpath(this.btnUsersInNavigationMenu).click();
        cy.wait(this.time);
    }

    clickOnAddUserButton () {
        cy.xpath(this.btnAddUser).click();
        cy.wait(this.time);
    }

    clickOnAddUserSaveButton () {
        cy.xpath(this.btnAddUserSave).click();
        cy.wait(this.time);
    }

    clickOnAddUserKebabMenuButton () {
        cy.xpath(this.btnAddUserKebabMenu).click();
        cy.wait(this.time);
    }

    clickOnAddUserKebabReInviteButton () {
        cy.xpath(this.btnAddUserKebabReInvite).click();
        cy.wait(this.time);
    }

    clickOnAddUserKebabLockButton () {
        cy.xpath(this.btnAddUserKebabLock).click();
        cy.wait(this.time);
    }

    clickOnAddUserKebabUnlockButton () {
        cy.wait(3000);
        cy.xpath(this.btnAddUserKebabUnlock).click();
    }

    clickOnAddUserKebabEditButton () {
        cy.xpath(this.btnAddUserKebabEdit).click();
        cy.wait(this.time);
    }

    clickOnAddUserKebabDeleteButton () {
        cy.xpath(this.btnAddUserKebabDelete).click();
        cy.wait(this.time);
    }

    clickOnAddUserWindowReInviteButton () {
        cy.xpath(this.btnAddUserWindowReInvite).click();
        cy.wait(this.time);
    }

    clickOnAddUserWindowLockButton () {
        cy.xpath(this.btnAddUserWindowLock).click();
        cy.wait(this.time);
    }

    clickOnAddUserWindowUnlockButton () {
        cy.xpath(this.btnAddUserWindowUnlock).click();
        cy.wait(this.time);
    }

    clickOnAddUserWindowDeleteButton () {
        cy.xpath(this.btnAddUserWindowDelete).click();
        cy.wait(this.time);
    }

    setAddUserFirstName (firstName) {
        cy.xpath(this.txtAddUserFirstName).clear().type(firstName);
        cy.wait(this.time);
    }

    setAddUserLastName (lastName) {
        cy.xpath(this.txtAddUserLastName).clear().type(lastName);
        cy.wait(this.time);
    }

    setAddUserEmail (email) {
        cy.xpath(this.txtAddUserEmail).clear().type(email);
        cy.wait(this.time);
    }

    setAddUserOrganization (organization) {
        cy.xpath(this.txtAddUserOrganization).clear().type(organization).type('{downarrow}').type('{Enter}');
        cy.wait(this.time);
    }

    setAddUserPhoneNumber (phoneNumber) {
        cy.xpath(this.txtAddUserPhoneNumber).clear().type(phoneNumber).type('{downarrow}').type('{Enter}');
        cy.wait(this.time);
    }

    setAddUserRole (role) {
        cy.xpath(this.txtAddUserRole).clear().type(role).type('{downarrow}').type('{Enter}');
        cy.wait(this.time);
    }

    setUserSearchbox (searchbox) {
        cy.xpath(this.txtUserSearchbox).clear().type(searchbox);
        cy.wait(this.time);
    }

    verifyUsersPage () {
        cy.url().should('eq', 'https://uat-falkonsms-fe.azurewebsites.net/users');
        cy.wait(this.time);
    }

    verifyAddUserWindowTitle () {
        cy.xpath(this.lblAddUserWindowTitle).should('have.text', 'Add User');
        cy.wait(this.time);
    }

    verifyAddUserFirstNameBlank () {
        cy.xpath(this.lblAddUserFirstNameBlank).should('have.text', 'First Name cannot be blank');
        cy.wait(this.time);
    }

    verifyAddUserLastNameBlank () {
        cy.xpath(this.lblAddUserLastNameBlank).should('have.text', 'Last Name cannot be blank');
        cy.wait(this.time);
    }

    verifyAddUserEmailBlank () {
        cy.xpath(this.lblAddUserEmailBlank).should('have.text', 'Email cannot be blank');
        cy.wait(this.time);
    }

    verifyAddUserOrganizationBlank () {
        cy.xpath(this.lblAddUserOrganizationBlank).should('have.text', 'Organization cannot be blank');
        cy.wait(this.time);
    }

    verifyAddUserPhoneNumberBlank () {
        cy.xpath(this.lblAddUserPhoneNumberBlank).should('have.text', 'Phone number cannot be blank');
        cy.wait(this.time);
    }

    verifyAddUserRoleBlank () {
        cy.xpath(this.lblAddUserRoleBlank).should('have.text', 'Role cannot be blank');
        cy.wait(this.time);
    }

    verifyAddUserFirstNameCharacterLimit () {
        cy.xpath(this.lblAddUserFirstNameCharacterLimit).should('have.text', 'First Name should not exceed 30 characters');
        cy.wait(this.time);
    }

    verifyAddUserLastNameCharacterLimit () {
        cy.xpath(this.lblAddUserLastNameCharacterLimit).should('have.text', 'Last Name should not exceed 30 characters');
        cy.wait(this.time);
    }

    verifyAddUserEmailInvalidFormat () {
        cy.xpath(this.lblAddUserEmailValidationMessage).should('have.text', 'Invalid Email');
        cy.wait(this.time);
        cy.xpath(this.txtAddUserEmail).clear();
        cy.wait(this.time);
    }

    verifyAddUserAddedSuccessfully () {
        cy.wait(3000);
        cy.xpath(this.lblAddUserSuccessfullyMessage).should('contain', 'added successfully');
    }

    verifyAddUserReInviteWindowText () {
        cy.xpath(this.lblAddUserAlertWindow).should('have.text', 'Are you sure you want to re-invite this user?');
        cy.wait(this.time);
    }

    verifyAddUserLockWindowText () {
        cy.xpath(this.lblAddUserAlertWindow).should('have.text', 'Are you sure you want to lock the user?');
        cy.wait(this.time);
    }

    verifyAddUserUnlockWindowText () {
        cy.xpath(this.lblAddUserAlertWindow).should('have.text', 'Are you sure you want to unlock the user?');
        cy.wait(this.time);
    }

    verifyAddUserDeleteWindowText () {
        cy.xpath(this.lblAddUserAlertWindow).should('have.text', 'Are you sure you want to delete this user?');
        cy.wait(this.time);
    }

    verifyAddUserRowGridCount () {
        cy.xpath(this.lblAddUserRowGridCount).should('have.length', 1);
        cy.wait(this.time);
    }

    verifyAddUserReInviteMailSuccessfully () {
        cy.xpath(this.lblAddUserSuccessfullyMessage).should('have.text', 'Mail has been sent to the user successfully!');
        cy.wait(3000);
    }

    verifyAddUserLockedSuccessfully () {
        cy.xpath(this.lblAddUserSuccessfullyMessage).should('contain', 'locked successfully!');
        cy.wait(3000);
    }

    verifyAddUserUnlockedSuccessfully () {
        cy.xpath(this.lblAddUserSuccessfullyMessage).should('contain', 'unlocked successfully!');
        cy.wait(3000);
    }

    verifyAddUserDeletedSuccessfully () {
        cy.xpath(this.lblAddUserSuccessfullyMessage).should('contain', 'deleted successfully!');
        cy.wait(this.time);
    }

    verifyAddUserUpdatedSuccessfully () {
        cy.xpath(this.lblAddUserSuccessfullyMessage).should('contain', 'updated successfully!');
        cy.wait(this.time);
    }

    verifyAddUserOrganizationTextBoxisDisabled () {
        cy.xpath(this.txtAddUserOrganization).should('be.disabled');
        cy.wait(this.time);
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

}

export default Users
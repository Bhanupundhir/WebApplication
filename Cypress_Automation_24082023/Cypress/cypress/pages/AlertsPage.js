class Alerts {

    time = 2000;
    btnAlertNavigationMenu = "//div[text()='Alerts']";
    btnAddAlert = "//span[text()='Add Alert']";
    btnAddAlertSave = "//button[@type='submit']";
    btnAddAlertFromResetDate = "//button[@title= 'Reset Date' and @class='my-auto d-flex c-pointer']";
    btnAddAlertToResetDate = "//button[@title= 'Reset Date' and @class='d-flex my-auto']";
    btnAddAlertDateSave = "//span[text()= 'save']";
    btnAddAlertDateCancel = "//span[text()= 'cancel']";
    btnAddAlertKebabMenu = "//span[@class='c-pointer']";
    btnAddAlertKebabEdit = "//span[text()='Edit']";
    btnAddAlertKebabStop = "//span[text()='Stop']";
    btnAddAlertKebabDelete = "//span[text()='Delete']";
    btnAddAlertKebabResume = "//span[text()='Resume']";
    btnAddAlertWindowStop = "//span[text()='Stop' and @class='my-auto ']";
    btnAddAlertWindowResume = "//span[text()='Resume' and @class='my-auto ']";
    btnAddAlertWindowDelete = "//span[text()='Delete' and @class='my-auto ']";
    txtAddAlertWindowType = "//input[@name='Type']";
    txtAddAlertWindowTitle = "//input[@name='Title']";
    txtAddAlertWindowSubtitle = "//input[@name='SubTitle']";
    txtAddAlertWindowDescription = "//p[@data-slate-node='element']";
    txtAddAlertWindowButton = "//input[@name='Button']";
    txtAddAlertWindowDisplayText = "//input[@name='DisplyText']";
    txtAddAlertLink = "//input[@name='Link']";
    txtAddAlertFrom = "//label[text()= 'From']/parent::div/div/input[@type='text']";
    txtAddAlertTo = "//label[text()= 'To']/parent::div/div/input[@type='text']";
    txtAddAlertSearchBox = "//input[@type='text']";
    lblAddAlertWindowTitle = "//span[@class='h2-regular color-display-title']";
    lblAddAlertWindowTypeBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Type')]";
    lblAddAlertWindowTitleBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Title')]";
    lblAddAlertWindowSubtitleBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Subtitle')]";
    lblAddAlertWindowDescriptionBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Description')]";
    lblAddAlertWindowDisplayTextBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Display Text')]";
    lblAddAlertWindowLinkBlank = "//p[@class='MuiFormHelperText-root h6-regular color-primary-danger t-align-right' and contains(text(), 'Link')]";
    lblAddAlertSuccessfully = "//span[@class= 'my-auto ml-1 mr-3']";
    lblAddAlertRowCount = "//span[@class='c-pointer']";
    lblAddAlertWindowDialogText = "//p[@id='alert-dialog-description']";
    lblAddAlertStatus = "//span[@class='status-variant-danger undefined']";
    lblAddAlertResumedStatus = "//span[@class='status-variant-warning undefined']";

    clickOnAlertNavigationMenuButton () {
        cy.xpath(this.btnAlertNavigationMenu).click();
        cy.wait(this.time);
    }

    clickOnAddAlertButton () {
        cy.xpath(this.btnAddAlert).click();
        cy.wait(this.time);
    }

    clickOnAddAlertWindowSave () {
        cy.xpath(this.btnAddAlertSave).click();
        cy.wait(this.time);
    }

    clickOnAddAlertDateSave () {
        cy.xpath(this.btnAddAlertDateSave).click();
        cy.wait(this.time);
    }

    clickOnAddAlertFromDate () {
        cy.xpath(this.txtAddAlertFrom).click();
        cy.wait(this.time);
    }

    clickOnAddAlertToDate () {
        cy.xpath(this.txtAddAlertTo).click();
        cy.wait(this.time);
    }

    clickOnAddAlertKebabMenu () {
        cy.xpath(this.btnAddAlertKebabMenu).click();
        cy.wait(this.time);
    }

    clickOnAddAlertKebabEdit () {
        cy.xpath(this.btnAddAlertKebabEdit).click();
        cy.wait(this.time);
    }

    clickOnAddAlertKebabStop () {
        cy.xpath(this.btnAddAlertKebabStop).click();
        cy.wait(this.time);
    }

    clickOnAddAlertKebabResume () {
        cy.xpath(this.btnAddAlertKebabResume).click();
        cy.wait(this.time);
    }

    clickOnAddAlertKebabDelete () {
        cy.xpath(this.btnAddAlertKebabDelete).click();
        cy.wait(this.time);
    }

    clickOnAddAlertWindowDialogStop () {
        cy.xpath(this.btnAddAlertWindowStop).click();
        cy.wait(this.time);
    }

    clickOnAddAlertWindowDialogResume () {
        cy.xpath(this.btnAddAlertWindowResume).click();
        cy.wait(this.time);
    }

    clickOnAddAlertWindowDialogDelete () {
        cy.xpath(this.btnAddAlertWindowDelete).click();
        cy.wait(this.time);
    }

    setAddAlertType () {
        cy.xpath(this.txtAddAlertWindowType).clear().type('release').type('{downarrow}').type('{Enter}');
        cy.wait(this.time);
    }

    setAddAlertTitle (title) {
        cy.xpath(this.txtAddAlertWindowTitle).clear().type(title);
        cy.wait(this.time);
    }

    setAddAlertSubtitle (subtitle) {
        cy.xpath(this.txtAddAlertWindowSubtitle).clear().type(subtitle);
        cy.wait(this.time);
    }

    setAddAlertDescription (description) {
        cy.xpath(this.txtAddAlertWindowDescription).clear().type(description);
        cy.wait(this.time);
    }

    setAddAlertButton (button) {
        cy.xpath(this.txtAddAlertWindowButton).clear().type(button).type('{downarrow}').type('{Enter}');
        cy.wait(this.time);
    }

    setAddAlertDisplayText (displaytext) {
        cy.xpath(this.txtAddAlertWindowDisplayText).clear().type(displaytext);
        cy.wait(this.time);
    }

    setAddAlertLink (link) {
        cy.xpath(this.txtAddAlertLink).clear().type(link);
        cy.wait(this.time);
    }

    setAddAlertSearchBox (searchbox) {
        cy.xpath(this.txtAddAlertSearchBox).clear().type(searchbox);
        cy.wait(this.time);
    }

    verifyAlertPage () {
        cy.url().should('eq', 'https://uat-falkonsms-fe.azurewebsites.net/alerts');
        cy.wait(this.time);
    }

    verifyAddAlertWindowTitle () {
        cy.xpath(this.lblAddAlertWindowTitle).should('have.text', 'Add Alert');
        cy.wait(this.time);
    }

    verifyAddAlertWindowTypeBlank () {
        cy.xpath(this.lblAddAlertWindowTypeBlank).should('have.text', 'Type cannot be blank');
        cy.wait(this.time);
    }

    verifyAddAlertWindowTitleBlank () {
        cy.xpath(this.lblAddAlertWindowTitleBlank).should('have.text', 'Title cannot be blank');
        cy.wait(this.time);
    }

    verifyAddAlertWindowSubtitleBlank () {
        cy.xpath(this.lblAddAlertWindowSubtitleBlank).should('have.text', 'Subtitle cannot be blank');
        cy.wait(this.time);
    }

    verifyAddAlertWindowDescriptionBlank () {
        cy.xpath(this.lblAddAlertWindowDescriptionBlank).should('have.text', 'Description cannot be blank');
        cy.wait(this.time);
    }

    verifyAddAlertWindowDisplayTextBlank () {
        cy.xpath(this.lblAddAlertWindowDisplayTextBlank).should('have.text', 'Display Text cannot be blank');
        cy.wait(this.time);
    }

    verifyAddAlertWindowLinkBlank () {
        cy.xpath(this.lblAddAlertWindowLinkBlank).should('have.text', 'Link cannot be blank');
        cy.wait(this.time);
    }

    verifyAddAlertAddedSucessfully () {
        cy.xpath(this.lblAddAlertSuccessfully).should('have.text', 'Alert added successfully!');
        cy.wait(this.time);
    }

    verifyAddAlertUpdatedSucessfully () {
        cy.xpath(this.lblAddAlertSuccessfully).should('have.text', 'Alert updated successfully!');
        cy.wait(this.time);
    }

    verifyAddAlertStoppedSucessfully () {
        cy.xpath(this.lblAddAlertSuccessfully).should('contain', 'stopped successfully!');
        cy.wait(this.time);
    }

    verifyAddAlertResumedSucessfully () {
        cy.xpath(this.lblAddAlertSuccessfully).should('contain', 'resumed successfully!');
        cy.wait(this.time);
    }

    verifyAddAlertDeletedSucessfully () {
        cy.xpath(this.lblAddAlertSuccessfully).should('contain', 'deleted successfully!');
        cy.wait(this.time);
    }

    verifyAddAlertRowCount () {
        cy.xpath(this.lblAddAlertRowCount).should('have.length', 1);
        cy.wait(this.time);
    }

    verifyAddAlertDialogWindowStopText () {
        cy.xpath(this.lblAddAlertWindowDialogText).should('have.text', 'Are you sure you want to stop this scheduled message?');
        cy.wait(this.time);
    }

    verifyAddAlertDialogWindowResumeText () {
        cy.xpath(this.lblAddAlertWindowDialogText).should('have.text', 'Are you sure you want to resume this scheduled message?');
        cy.wait(this.time);
    }

    verifyAddAlertDialogWindowDeleteText () {
        cy.xpath(this.lblAddAlertWindowDialogText).should('have.text', 'Are you sure you want to delete this Alert?');
        cy.wait(this.time);
    }

    verifyAddAlertStoppedStatus () {
        cy.xpath(this.lblAddAlertStatus).should('have.text', 'Stopped');
        cy.wait(this.time);
    }

    verifyAddAlertResumedStatus () {
        cy.xpath(this.lblAddAlertResumedStatus).should('have.text', 'Scheduled');
        cy.wait(this.time);
    }

    randomStringUpperCaseGenerator(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 1; i <= length; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

}

export default Alerts
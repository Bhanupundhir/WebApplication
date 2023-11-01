import Alerts from "..//pages/AlertsPage";
import Login from "..//pages/LoginPage";

describe ("Verify Alerts Module", () => {

    const ap = new Alerts();

    it ("Verify System Admin Login", () => {
        const lp = new Login();
        lp.navigateLogin();
        lp.setUsername('Sysadm.uat@gmail.com');
        lp.setPassword('Uat@@123');
        lp.clickSubmit();
        lp.verifyValidLogin();
    })

    it ("Verify Alerts Page", () => {
        ap.clickOnAlertNavigationMenuButton();
        ap.verifyAlertPage();
    })

    it ("Verify Add Alert Window", () => {
        ap.clickOnAddAlertButton();
        ap.verifyAddAlertWindowTitle();
    })

    it ("Verify Add Alert Window Blank Validation Message", () => {
        ap.clickOnAddAlertWindowSave();
        ap.verifyAddAlertWindowTypeBlank();
        ap.verifyAddAlertWindowTitleBlank();
        ap.verifyAddAlertWindowSubtitleBlank();
        ap.verifyAddAlertWindowDescriptionBlank();
        ap.verifyAddAlertWindowDisplayTextBlank();
        ap.verifyAddAlertWindowLinkBlank();
    })

    it ("Verify Add Alert Added Successfully", () => {
        ap.setAddAlertType();
        var text = ap.randomStringUpperCaseGenerator(5);
        ap.setAddAlertTitle(text + ' ' + text);
        ap.setAddAlertSubtitle(text + text + ' ' + text + text);
        ap.setAddAlertDescription(text + text + text + ' ' + text + text + text + ' ' + text + text + text);
        ap.setAddAlertButton('link');
        ap.setAddAlertDisplayText(text + text + text);
        ap.setAddAlertLink('www.' + text + '.com');
        ap.clickOnAddAlertFromDate();
        ap.clickOnAddAlertDateSave();
        ap.clickOnAddAlertToDate();
        ap.clickOnAddAlertDateSave();
        ap.clickOnAddAlertWindowSave();
        ap.verifyAddAlertAddedSucessfully();
        ap.setAddAlertSearchBox(text + ' ' + text);
        ap.verifyAddAlertRowCount();
    })

    it ("Verify Add Alert Edit Functionality", () => {
        ap.clickOnAddAlertKebabMenu();
        ap.clickOnAddAlertKebabEdit();
        var text = ap.randomStringUpperCaseGenerator(5);
        ap.setAddAlertTitle(text + ' ' + text);
        ap.setAddAlertSubtitle(text + text + ' ' + text + text);
        ap.setAddAlertDescription(text + text + text + ' ' + text + text + text + ' ' + text + text + text);
        ap.setAddAlertButton('link');
        ap.setAddAlertDisplayText(text + text + text);
        ap.setAddAlertLink('www.' + text + '.com');
        ap.clickOnAddAlertFromDate();
        ap.clickOnAddAlertDateSave();
        ap.clickOnAddAlertToDate();
        ap.clickOnAddAlertDateSave();
        ap.clickOnAddAlertWindowSave();
        ap.verifyAddAlertUpdatedSucessfully();
        ap.setAddAlertSearchBox(text + ' ' + text);
        ap.verifyAddAlertRowCount();
    })

    it ("Verify Add Alert Stop Functionality", () => {
        ap.clickOnAddAlertKebabMenu();
        ap.clickOnAddAlertKebabStop();
        ap.verifyAddAlertDialogWindowStopText();
        ap.clickOnAddAlertWindowDialogStop();
        ap.verifyAddAlertStoppedSucessfully();
        ap.verifyAddAlertStoppedStatus();
    })

    it ("Verify Add Alert Resume Functionality", () => {
        ap.clickOnAddAlertKebabMenu();
        ap.clickOnAddAlertKebabResume();
        ap.verifyAddAlertDialogWindowResumeText();
        ap.clickOnAddAlertWindowDialogResume();
        ap.verifyAddAlertResumedSucessfully();
        ap.verifyAddAlertResumedStatus();
    })

    it ("Verify Add Alert Delete Functionality", () => {
        ap.clickOnAddAlertKebabMenu();
        ap.clickOnAddAlertKebabDelete();
        ap.verifyAddAlertDialogWindowDeleteText();
        ap.clickOnAddAlertWindowDialogDelete();
        ap.verifyAddAlertDeletedSucessfully();
    })

})
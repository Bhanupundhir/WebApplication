import Users from "..//pages/UsersPage";
import Login from "..//pages/LoginPage";

describe ("Users Module Test Suite", () => {

    const up = new Users();

    it ("Verify Admin Login", () => {
        const lp = new Login();
        lp.navigateLogin();
        lp.setUsername('Sysadm.uat@gmail.com');
        lp.setPassword('Uat@@123');
        lp.clickSubmit();
        lp.verifyValidLogin();
    })

    it ("Verify Users Page", () => {
        up.clickOnUsersButton();
        up.verifyUsersPage();
    })

    it ("Verify Add User Window Title", () => {
        up.clickOnAddUserButton();
        up.verifyAddUserWindowTitle();
    })

    it ("Verify Add User Blank Fields Validation Message", () => {
        up.clickOnAddUserSaveButton();
        up.verifyAddUserFirstNameBlank();
        up.verifyAddUserLastNameBlank();
        up.verifyAddUserEmailBlank();
        up.verifyAddUserOrganizationBlank();
        up.verifyAddUserPhoneNumberBlank();
        up.verifyAddUserRoleBlank();
    })

    it ("Verify Add User First and Last Name Character Limit", () => {
        var firstName = up.randomStringUpperCaseGenerator(31);
        var lastName = up.randomStringUpperCaseGenerator(31);
        up.setAddUserFirstName(firstName);
        up.setAddUserLastName(lastName);
        up.verifyAddUserFirstNameCharacterLimit();
        up.verifyAddUserLastNameCharacterLimit();
    })

    it ("Verify Add User Email Invalid Format", () => {
        var emailWithValue = up.randomStringLowerCaseGenerator(1);
        up.setAddUserEmail(emailWithValue);
        up.clickOnAddUserSaveButton();
        up.verifyAddUserEmailInvalidFormat();
        up.setAddUserEmail(emailWithValue + '@');
        up.clickOnAddUserSaveButton();
        up.verifyAddUserEmailInvalidFormat();
        up.setAddUserEmail(emailWithValue + '@' + emailWithValue);
        up.clickOnAddUserSaveButton();
        up.verifyAddUserEmailInvalidFormat();
        up.setAddUserEmail(emailWithValue + '@' + emailWithValue + '.');
        up.clickOnAddUserSaveButton();
        up.verifyAddUserEmailInvalidFormat();
        up.setAddUserEmail(emailWithValue + '@' + emailWithValue + '.' + emailWithValue);
        up.clickOnAddUserSaveButton();
        up.verifyAddUserEmailInvalidFormat();
    })

    it ("Verify New User Added Successfully", () => {
        var firstName = up.randomStringUpperCaseGenerator(5);
        var lastName = up.randomStringUpperCaseGenerator(5);
        var email = up.randomStringLowerCaseGenerator(2);
        up.setAddUserFirstName(firstName);
        up.setAddUserLastName(lastName);
        up.setAddUserEmail(email + '@' + email + '.' + email);
        up.setAddUserOrganization('Three');
        up.setAddUserPhoneNumber('Lahiru');
        up.setAddUserRole ('Admin');
        up.clickOnAddUserSaveButton();
        up.verifyAddUserAddedSuccessfully();
        up.setUserSearchbox(firstName + ' ' + lastName);
        up.verifyAddUserRowGridCount();
    })

    it ("Verify Add User Re-Invite Functionality", () => {
        up.clickOnAddUserKebabMenuButton();
        up.clickOnAddUserKebabReInviteButton();
        up.verifyAddUserReInviteWindowText();
        up.clickOnAddUserWindowReInviteButton();
        up.verifyAddUserReInviteMailSuccessfully();
    })

    it ("Verify Add User Lock and Unlock Functionality", () => {
        up.clickOnAddUserKebabMenuButton();
        up.clickOnAddUserKebabLockButton();
        up.verifyAddUserLockWindowText();
        up.clickOnAddUserWindowLockButton();
        up.verifyAddUserLockedSuccessfully();
        up.clickOnAddUserKebabMenuButton();
        up.clickOnAddUserKebabUnlockButton();
        up.verifyAddUserUnlockWindowText();
        up.clickOnAddUserWindowUnlockButton();
        up.verifyAddUserUnlockedSuccessfully();
    })

    it ("Verify Add User Edit Functionality", () => {
        up.clickOnAddUserKebabMenuButton();
        up.clickOnAddUserKebabEditButton();
        up.verifyAddUserOrganizationTextBoxisDisabled();
        var firstName = up.randomStringUpperCaseGenerator(5);
        var lastName = up.randomStringUpperCaseGenerator(5);
        var email = up.randomStringLowerCaseGenerator(2);
        up.setAddUserFirstName(firstName);
        up.setAddUserLastName(lastName);
        up.setAddUserEmail(email + '@' + email + '.' + email);
        up.setAddUserPhoneNumber('Lahiru');
        up.setAddUserRole ('Admin');
        up.clickOnAddUserSaveButton();
        up.verifyAddUserUpdatedSuccessfully();
        up.setUserSearchbox(firstName + ' ' + lastName);
        up.verifyAddUserRowGridCount();
    })

    it ("Verify Add User Delete Functionality", () => {
        up.clickOnAddUserKebabMenuButton();
        up.clickOnAddUserKebabDeleteButton();
        up.verifyAddUserDeleteWindowText();
        up.clickOnAddUserWindowDeleteButton();
        up.verifyAddUserDeletedSuccessfully();
    })

})
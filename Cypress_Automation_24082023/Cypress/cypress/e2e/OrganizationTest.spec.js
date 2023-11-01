import Organization from "../pages/OrganizationPage";
import Login from "../pages/LoginPage";

describe ("Organizations", () => {
    const op = new Organization();

    it ("verifyAdminLogin", () => {
            const lp = new Login();
            lp.navigateLogin();
            lp.setUsername("Sysadm.uat@gmail.com");
            lp.setPassword("Uat@@123");
            lp.clickSubmit();
            lp.verifyValidLogin();
    }
    )

    it ("verifyOrganizationPage", () => { 
        op.clickOnOrganizationButton();
        op.verifyOrganizationPage();
    }
    )

    it ("verifyAddOrganizationWindow", () => {
        op.clickOnAddOrganizationButton();
        op.verifyAddOrganizationTitle();
    }
    )

    it ("verifyAddOrganizationBlankTextBoxMessages", () => {
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationNameBlank();
        op.verifyAddOrganizationReferenceBlank();
        op.verifyAddOrganizationEmailBlank();
        op.verifyAddOrganizationMobileNumberBlank();
        op.verifyAddOrganizationIndustryBlank();
        op.verifyAddOrganizationHouseNumberBlank();
        op.verifyAddOrganizationStreetNameBlank();
        op.verifyAddOrganizationZipCodeBlank();
        op.verifyAddOrganizationCityBlank();
        op.verifyAddOrganizationStateBlank();
        op.verifyAddOrganizationCountryBlank();
    }
    )

    it ("verifyAddOrganizationNameCharacterLimit", () => {
        var nameCharacter = op.randomStringUpperCaseGenerator(31);
        op.setAddOrganizationName(nameCharacter);
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationNameCharacterLimit();
    })

    it ("verifyAddOrganizationReferenceCharacterLimit", () => {
        var referenceCharacter = op.randomStringUpperCaseGenerator(11);
        op.setAddOrganizationReference(referenceCharacter);
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationReferenceCharacterLimit();
    })

    it ("verifyAddOrganizationEmailInvalidFormat", () => {
        var emailWithValue = op.randomStringLowerCaseGenerator(1);
        op.setAddOrganizationEmail(emailWithValue);
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationEmailInvalidFormat();
        op.setAddOrganizationEmail(emailWithValue + '@');
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationEmailInvalidFormat();
        op.setAddOrganizationEmail(emailWithValue + '@' + emailWithValue);
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationEmailInvalidFormat();
        op.setAddOrganizationEmail(emailWithValue + '@' + emailWithValue + '.');
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationEmailInvalidFormat();
        op.setAddOrganizationEmail(emailWithValue + '@' + emailWithValue + '.' + emailWithValue);
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationEmailInvalidFormat();
    })

    it ("verifyAddOrganizationMobileNumberWith10Numbers", () => {
        var invalidMobileNumber = op.randomNumberGenerator(10);
        op.setAddOrganizationMobileNumber(invalidMobileNumber);
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationMobileNumberInvalidFormat();
    })

    it ("verifyAddOrganizationSuccessMessage", () => {
        var name = op.randomStringUpperCaseGenerator(5);
        var reference = op.randomStringUpperCaseGenerator(5);
        var email = op.randomStringLowerCaseGenerator(3);
        var mobileNumber = op.randomNumberGenerator(11);
        var houseNumber = op.randomNumberGenerator(4);
        var streetName = op.randomStringUpperCaseGenerator(8);
        op.setAddOrganizationName(name);
        op.setAddOrganizationReference(reference);
        op.setAddOrganizationEmail(email + '@' + email + '.' + email);
        op.setAddOrganizationMobileNumber(mobileNumber);
        op.setAddOrganizationIndustry();
        op.setAddOrganizationHouseNumber(houseNumber);
        op.setAddOrganizationStreetName(streetName);
        op.setAddOrganizationZipCode('77450');
        op.verifyAddOrganizationCityStateCountry();
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationSuccessMessage();
    })

    it ("verifyAddOrganizationDuplicateNameMessage", () => {
        var reference = op.randomStringUpperCaseGenerator(5);
        var email = op.randomStringLowerCaseGenerator(3);
        var mobileNumber = op.randomNumberGenerator(11);
        var houseNumber = op.randomNumberGenerator(4);
        var streetName = op.randomStringUpperCaseGenerator(8);
        op.clickOnKebabMenuButton();
        op.clickOnKebabMenuEditButton();
        op.setAddOrganizationDuplicateName();
        op.setAddOrganizationReference(reference);
        op.setAddOrganizationEmail(email+ '@' + email + '.' + email);
        op.setAddOrganizationMobileNumber(mobileNumber);
        op.setAddOrganizationIndustry();
        op.setAddOrganizationHouseNumber(houseNumber);
        op.setAddOrganizationStreetName(streetName);
        op.setAddOrganizationZipCode('77450');
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationDuplicateNameMessage();
        op.clickOnAddOrganizationCancelButton();
    })

    it ("verifyAddOrganizationDuplicateReferenceMessage", () => {
        var name = op.randomStringUpperCaseGenerator(5);
        var email = op.randomStringLowerCaseGenerator(3);
        var mobileNumber = op.randomNumberGenerator(11);
        var houseNumber = op.randomNumberGenerator(4);
        var streetName = op.randomStringUpperCaseGenerator(8);
        op.clickOnKebabMenuButton();
        op.clickOnKebabMenuEditButton();
        op.setAddOrganizationDuplicateReference();
        op.setAddOrganizationName(name);
        op.setAddOrganizationEmail(email+ '@' + email + '.' + email);
        op.setAddOrganizationMobileNumber(mobileNumber);
        op.setAddOrganizationIndustry();
        op.setAddOrganizationHouseNumber(houseNumber);
        op.setAddOrganizationStreetName(streetName);
        op.setAddOrganizationZipCode('77450');
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationDuplicateReferenceMessage();
        op.clickOnAddOrganizationCancelButton();
    })

    it ("verifyAddOrganizationEditedSuccessfully" , () => {
        var name = op.randomStringUpperCaseGenerator(5);
        var reference = op.randomStringUpperCaseGenerator(5);
        var email = op.randomStringLowerCaseGenerator(3);
        var mobileNumber = op.randomNumberGenerator(11);
        var houseNumber = op.randomNumberGenerator(4);
        var streetName = op.randomStringUpperCaseGenerator(8);
        op.clickOnKebabMenuButton();
        op.clickOnKebabMenuEditButton();
        op.verifyAddOrganizationEditWindowTitle();
        op.verifyAddOrganizationEditWindowReferenceDisabled();
        op.setAddOrganizationName(name + '_OFF');
        op.setAddOrganizationEmail(email + '@' + email + '.' + email);
        op.setAddOrganizationMobileNumber(mobileNumber);
        op.setAddOrganizationIndustry();
        op.setAddOrganizationHouseNumber(houseNumber);
        op.setAddOrganizationStreetName(streetName);
        op.setAddOrganizationZipCode('77450');
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationEditSuccessMessage();
    })

    it ("verifyAddOrganizationEnabledAndDisabledStatus", () => {
        op.verifyAddOrganizationEnabledStatus();
        op.clickOnKebabMenuButton();
        op.clickOnKebabMenuDisableButton();
        op.verifyAddOrganizationDisableWindowText();
        op.clickOnDisableWindowDisable();
        op.verifyDisableSuccessfullyMessage();
        op.verifyAddOrganizationDisabledStatus();
    })

    it ("verifyAddOrganization2FactorAuthenticationOff", () => {
        op.clickOnKebabMenuButton();
        op.clickOnKebabMenuSettingsButton();
        op.verify2FactorAuthenticationText();
        op.verify2FactorAuthenticationCheckedStatus();
        op.clickOn2FactorAuthenticationCheckbox();
        op.verify2FactorAuthenticationTurnOffText();
        op.clickOn2FactorAuthenticationTurnOffButton();
        op.verify2FactorAuthenticationTurnOffSuccessMessage();
        op.clickOn2FactorAuthenticationTurnOffCancel();
        op.clickOnKebabMenuButton();
        op.clickOnKebabMenuSettingsButton();
        op.verify2FactorAuthenticationUnCheckedStatus();
        op.clickOn2FactorAuthenticationTurnOffCancel();
    })

    it ("verifyAddOrganizationEnabledStatus", () => {
        op.clickOnKebabMenuButton();
        op.clickOnKebabMenuEnableButton();
        op.verifyAddOrganizationEnableWindowText();
        op.clickOnEnableWindowEnable();
        op.verifyEnableSuccessfullyMessage();
        op.verifyAddOrganizationEnabledStatus();
    })

    it ("verifyAddOrganizationWithEnabledAnd2FactorAuthenticationON", () => {
        op.clickOnAddOrganizationButton();
        var name = op.randomStringUpperCaseGenerator(5);
        var reference = op.randomStringUpperCaseGenerator(5);
        var email = op.randomStringLowerCaseGenerator(3);
        var mobileNumber = op.randomNumberGenerator(11);
        var houseNumber = op.randomNumberGenerator(4);
        var streetName = op.randomStringUpperCaseGenerator(8);
        op.setAddOrganizationName(name + '_ON');
        op.setAddOrganizationReference(reference);
        op.setAddOrganizationEmail(email + '@' + email + '.' + email);
        op.setAddOrganizationMobileNumber(mobileNumber);
        op.setAddOrganizationIndustry();
        op.setAddOrganizationHouseNumber(houseNumber);
        op.setAddOrganizationStreetName(streetName);
        op.setAddOrganizationZipCode('77450');
        op.clickOnAddOrganizationSaveButton();
        op.verifyAddOrganizationSuccessMessage();
        op.verifyAddOrganizationEnabledStatus();
        op.clickOnKebabMenuButton();
        op.clickOnKebabMenuSettingsButton();
        op.verify2FactorAuthenticationCheckedStatus();
    })

}
)
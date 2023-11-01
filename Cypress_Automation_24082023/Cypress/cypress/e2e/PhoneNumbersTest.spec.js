import Login from "../pages/LoginPage";
import PhoneNumber from "../pages/PhoneNumberPage";
import Random from "../pages/Random";

describe ("Phone Numbers Page", () => {

    const pnp = new PhoneNumber();
    const rp = new Random();

    it ("Verify System Admin Login", () => {
        cy.fixture('Credentails.json').then(data => {
            const lp = new Login();
            lp.navigateLogin();
            lp.setUsername(data.sysusername);
            lp.setPassword(data.syspassword);
            lp.clickSubmit();
            lp.verifyValidLogin();
        })
    })

    it ("Verify Phone Numbers Page", () => {
        pnp.clickOnOrganizationButton();
        pnp.clickOnPhoneNumbersButton();
        pnp.verifyPhoneNumbersPageUrl();
    })

    it ("Verify Toll Free Texting Page", () => {
        pnp.clickOnAddPhoneNumberButton();
        pnp.verifyAddPhoneNumberSelectionPage();
        pnp.clickOnAddPhoneNumberTollFreeTexting();
        pnp.verifyAddPhoneNumberTollFreeTextingPage();        
    })

    it ("Verify Toll Free Texting Blank Messages", () => {
        pnp.clickOnAddPhoneNumberNextButton();
        pnp.verifyTollFreeTextingNameBlank();
        pnp.verifyTollFreeTextingPhoneNumberBlank();
        pnp.verifyTollFreeTextingOrganizationBlank();
    })

    it ("Verify Toll Free Texting Name Character and Mobile Number Digit Limit", () => {
        cy.fixture('Credentails.json').then(data => {
            pnp.setTollFreeTextingName(data.characterlimit31);
            pnp.setTollFreeTextingPhoneNumber(data.digitlimit10);
            pnp.verifyTollFreeTextingNameCharacterLimit();
            pnp.verifyTollFreeTextingPhoneNumberInvalidEntry();
        })
    })

    it ("Verify Registration Page", () => {
        cy.fixture('PhoneNumbers.json').then(data => {
        var name = rp.randomStringUpperCaseGenerator(10);
        pnp.setTollFreeTextingName(name);
        var phoneNumber = rp.randomNumberGenerator(10);
        pnp.setTollFreeTextingPhoneNumber(phoneNumber);
        pnp.setTollFreeTextingOrganization(data.selectOrganization);
        pnp.clickOnAddPhoneNumberNextButton();
        pnp.verifyAddPhoneNumberRegistrationPage();
        })
    })

    it ("Verify Registration Blank Validation Message", () => {
        pnp.clickOnRegistrationAddPhoneNumberButton();
        pnp.verifyRegistraionFirstNameBlank();
        pnp.verifyRegistraionLastNameBlank();
        pnp.verifyRegistraionHouseNumberBlank();
        pnp.verifyRegistraionStreetNameBlank();
        pnp.verifyRegistraionZipCodeBlank();
        pnp.verifyRegistraionCityBlank();
        pnp.verifyRegistraionStateBlank();
        pnp.verifyRegistraionCountryBlank();
    })

    it ("Verify Registration Character Limit, Invalid Zipcode and Valid Zipcode", () => {
        cy.fixture('Credentails.json').then(data => {
            pnp.setRegistrationFirstName(data.characterlimit21);
            pnp.setRegistrationLastName(data.characterlimit21);
            pnp.verifyRegistrationFirstNameCharacterLimit();
            pnp.verifyRegistrationLastNameCharacterLimit();
            pnp.setRegistrationZipcode(data.invalidzipcode);
            pnp.verifyRegistrationInvalidZipCode();
            pnp.setRegistrationZipcode(data.validzipcode);
            pnp.verifyRegistraionCityValue();
            pnp.verifyRegistraionStateValue();
            pnp.verifyRegistraionCountryValue();
        })
    })

    it ("Verify Select Plan Page", () => {
        cy.fixture('Credentails.json').then(data => {
            var firstname = rp.randomStringUpperCaseGenerator(10);
            var lastname = rp.randomStringUpperCaseGenerator(10);
            var housenumber = rp.randomNumberGenerator(4);
            var streetname = rp.randomStringUpperCaseGenerator(5);
            pnp.setRegistrationFirstName(firstname);
            pnp.setRegistrationLastName(lastname);
            pnp.setRegistrationZipcode(data.validzipcode);
            pnp.setRegistrationHouseNumber(housenumber);
            pnp.setRegistrationStreetName(streetname);
            pnp.clickOnRegistrationAddPhoneNumberButton();
            pnp.verifyRegistrationStatusMessage();
            pnp.verifyAddPhoneNumberSelectPlanPage();
        })
    })
})
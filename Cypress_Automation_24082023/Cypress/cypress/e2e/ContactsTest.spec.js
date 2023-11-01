import Login from "../pages/LoginPage";
import Contacts from "../pages/ContactsPage";

describe ("Contacts", () => {
    const cp = new Contacts();
    before ("Login", () => {
            const lp = new Login();
            lp.navigateLogin();
            lp.setUsername("qateamautomation1@yopmail.com");
            cy.wait(3000);
            cy.debug();
            lp.setPassword("Test@123");
            lp.clickSubmit();      
      }
    )

    it ("Verify Contacts Menu Page", () => {
            cp.clickOnContactsMenuButton();
            cy.wait(3000);
            cy.url().should('eq', 'https://uat-falkonsms-fe.azurewebsites.net/contacts');
        }
    )

    it ("Verify Add Contact Pop Up Window", () => {
            cp.clickOnAddContactWindowButton();
            cy.wait(3000);
            cp.verifyAddContactWindow();
            cy.wait(3000);
        }
    )

    it ("Verify Blank Fields Validation Message In Add Contacts Window", () => {
            cp.clickOnAddWindowCancelButton();
            cy.wait(3000);
            cp.clickOnAddContactWindowButton();
            cy.wait(3000);
            cp.clickOnAddWindowSaveButton();
            cy.wait(3000);
            cp.verifyFirstNameBlankFieldsInAddContactsWindow();
            cy.wait(3000);
            cp.verifyPhoneNumberBlankFieldsInAddContactsWindow();
        }
    )

    it ("Verify First and Last Name Exceed Character Limit Validation Message", () => {
            cp.clickOnAddWindowCancelButton();
            cy.wait(3000);
            cp.clickOnAddContactWindowButton();
            cy.wait(3000);
            var nameLimit = cp.randomStringGenerator(31);
            cp.inputFirstName(nameLimit);
            cy.wait(3000);
            cp.inputLastName(nameLimit);
            cy.wait(3000);
            cp.verifyFirstNameExceedCharacterLimit();
            cy.wait(3000);
            cp.verifyLastNameExceedCharacterLimit();
        }    
    )

    it ("Verify Characters in Phone Number Input Validation Message", () => {
            cp.clickOnAddWindowCancelButton();
            cy.wait(3000);
            cp.clickOnAddContactWindowButton();
            cy.wait(3000);
            var phoneNumber1 = cp.randomCharacterGenerator(1);
            cp.inputPhoneNumber(phoneNumber1);
            cy.wait(3000);
            cp.verifyCharactersInPhoneNumber();
        }  
    )

    it ("Verify Less Than 11 Characters In Phone Number Input Validation Message", () => {
            cp.clickOnAddWindowCancelButton();
            cy.wait(3000);
            cp.clickOnAddContactWindowButton();
            cy.wait(3000);
            var phoneNumber11 = cp.randomNumberGenerator(8);
            cp.inputPhoneNumber(phoneNumber11);
            cy.wait(3000);
            cp.verifyLessThan11CharactersInPhoneNumber();
        }
    )

    it ("Verify Invalid Email Input Validation Message", () => {
            cp.clickOnAddWindowCancelButton();
            cy.wait(3000);
            cp.clickOnAddContactWindowButton();
            cy.wait(3000);
            var emailID = cp.randomInvalidEmailGenerator01(10);
            cp.inputEmail(emailID);
            cy.wait(3000);
            cp.verifyInvalidEmail();
            cy.wait(3000);
            cp.clickOnAddWindowCancelButton();
            cy.wait(3000);
            cp.clickOnAddContactWindowButton();
            cy.wait(3000);
            var emailID = cp.randomInvalidEmailGenerator02(10);
            cp.inputEmail(emailID);
            cy.wait(3000);
            cp.verifyInvalidEmail();
        }
    )

    it ("Verify Addition of New Contact Functionality", () => {
            cp.clickOnAddWindowCancelButton();
            cy.wait(3000);
            cp.clickOnAddContactWindowButton();
            cy.wait(3000);
            var firstName = cp.randomStringGenerator(2);
            cp.inputFirstName(firstName);
            cy.wait(3000);
            var lastName = cp.randomStringGenerator(2);
            cp.inputLastName(lastName);
            cy.wait(3000);
            var phoneNumber = cp.randomNumberGenerator(10);
            cp.inputPhoneNumber(phoneNumber);
            cy.wait(3000);
            var emailID = cp.randomEmailGenerator(10)
            cp.inputEmail(emailID);
            cp.contactAddedSuccessfullyMessage();
            cy.wait(3000);
            cp.verifyGridRowCount1();
            cy.wait(3000);
        }
    )

    it ("Verify Modification of Existing Contact Functionality", () => {
            cp.clickOnGridKebabMenuButton();
            cy.wait(3000);
            cp.clickOnGridKebabMenuEditButton();
            cy.wait(3000);
            var firstName = cp.randomStringGenerator(2);
            cp.inputFirstName(firstName);
            cy.wait(3000);
            var lastName = cp.randomStringGenerator(2);
            cp.inputLastName(lastName);
            cy.wait(3000);
            var emailID = cp.randomEmailGenerator(10)
            cp.inputEmail(emailID);
            cy.wait(3000);
            cp.verifyAddContactsEditAction();
            cy.wait(3000);
        }
    )

    it ("Verify Existing Contact Block And Unblock Functionality", () => {
            cp.clickOnGridKebabMenuButton();
            cy.wait(3000);
            cp.clickOnGridKebabMenuBlockButton();
            cy.wait(3000);
            cp.verifyAddContactsBlockAction();
        }
    )

    it ("Verify Existing Contact Share Functionality", () => {
            cp.verifyAddContactsShareAction();
        }
    )

    it ("Verify Existing Contact Switch Functionality", () => {
            cp.verifyAddContactsSwitchAction();
        }
    )
    
    }
)

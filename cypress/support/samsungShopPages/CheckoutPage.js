const pageLocators = {

    firstNameElement: "[name='firstName']",

    lastNameElement: "[name='lastName']",

    postalCodeElement: "[name='postalCode']",

    emailElement: "[name='email']",

    phoneElement: "[name='phone']",

    alternatePhoneElement: "[name='alternate']",

    firstNameValidationElement: ":nth-child(1) > :nth-child(1) > :nth-child(1) > .input-error-msg",

    lastNameValidationElement: ":nth-child(1) > :nth-child(1) > :nth-child(2) > .input-error-msg",

    postalCodeValidationElement: ".col-justify > .input-error-msg",

    emailValidationElement: ":nth-child(4) > :nth-child(1) > .error > .input-error-msg",

    phoneValidationElement: ".last > :nth-child(1) > :nth-child(1) > .input-error-msg",

    alternatePhoneValidationElement: ".last > :nth-child(1) > :nth-child(2) > .input-error-msg"
}

export default class CheckoutPage {

    /**
    * writes an invalid first name, uses invalidFirstName from the env variables, and firstNameElement from the page locators
    */
    static writeInvalidFirstName() {
        cy.get(pageLocators.firstNameElement).type(Cypress.env("invalidFirstName"))
    }

    /**
   * writes an invalid last name, uses invalidLastName from the env variables, and lastNameElement from the page locators
   */
    static writeInvalidLastName() {
        cy.get(pageLocators.lastNameElement).type(Cypress.env("invalidLastName"))
    }

    /**
    * writes an invalid postal code, uses invalidPostalCode from the env variables, and postalCodeElement from the page locators
    */
    static writeInvalidPostalCode() {
        cy.get(pageLocators.postalCodeElement).type(Cypress.env("invalidPostalCode"))
    }

    /**
    * writes an invalid email, uses invalidEmail from the env variables, and emailElement from the page locators
    */
    static writeInvalidEmail() {
        cy.get(pageLocators.emailElement).type(Cypress.env("invalidEmail"))
    }

    /**
   * writes an invalid phone number, uses invalidPhoneNumber from the env variables, and phoneElement from the page locators
   */
    static writeInvalidPhoneNumber() {
        cy.get(pageLocators.phoneElement).type(Cypress.env("invalidPhoneNumber"))
    }

    /**
   * writes an invalid alternate phone number, uses invalidPhoneNumber from the env variables, and alternatePhoneElement from the page locators
   */
    static writeInvalidAlternatePhoneNumber() {
        cy.get(pageLocators.alternatePhoneElement).type(Cypress.env("invalidPhoneNumber"))
    }

    /**
   * validates that ann error message has appeared under the first name field, uses firstNameValidationElement from the page locators
   */
    static verifyFirstNameValidationError() {
        cy.get(pageLocators.firstNameValidationElement).should('be.visible')
    }

    /**
    * validates that ann error message has appeared under the last name field, uses lastNameValidationElement from the page locators
    */
    static verifyLastNameValidationError() {
        cy.get(pageLocators.lastNameValidationElement).should('be.visible')
    }

    /**
   * validates that ann error message has appeared under the postal code field, uses postalCodeValidationElement from the page locators
   */
    static verifyPostalCodeValidationError() {
        cy.get(pageLocators.postalCodeValidationElement).should('be.visible')
    }

    /**
   * validates that ann error message has appeared under the email field, uses emailValidationElement from the page locators
   */
    static verifyEmailValidationError() {
        cy.get(pageLocators.emailValidationElement).should('be.visible')
    }

    /**
    * validates that ann error message has appeared under the phone number field, uses phoneValidationElement from the page locators
    */
    static verifyPhoneValidationError() {
        cy.get(pageLocators.phoneValidationElement).should('be.visible')
    }

    /**
   * validates that ann error message has appeared under the alternate phone number field, uses alternatePhoneValidationElement from the page locators
   */
    static verifyAlternatePhoneValidationError() {
        cy.get(pageLocators.alternatePhoneValidationElement).should('be.visible')
    }

    /**
    * writes the first name, uses firstName from the env variables, and firstNameElement from the page locators
    */
    static writeFirstName() {
        cy.get(pageLocators.firstNameElement).clear().type(Cypress.env("firstName"))
    }

    /**
   * writes the last name, uses lastName from the env variables, and lastNameElement from the page locators
   */
    static writeLastName() {
        cy.get(pageLocators.lastNameElement).clear().type(Cypress.env("lastName"))
    }

    /**
  * writes the postal code, uses postalCode from the env variables, and postalCodeElement from the page locators
  */
    static writePostalCode() {
        cy.get(pageLocators.postalCodeElement).clear().type(Cypress.env("postalCode"))
    }

    /**
  * writes the email, uses email from the env variables, and emailElement from the page locators
  */
    static writeEmail() {
        cy.get(pageLocators.emailElement).clear().type(Cypress.env("email"))
    }

    /**
    * writes the phone number, uses phoneNumber from the env variables, and phoneElement from the page locators
    */
    static writePhoneNumber() {
        cy.get(pageLocators.phoneElement).clear().type(Cypress.env("phoneNumber"))
    }

    /**
   * writes the alternate phone number, uses phoneNumber from the env variables, and alternatePhoneElement from the page locators
   */
    static writeAlternatePhoneNumber() {
        cy.get(pageLocators.alternatePhoneElement).clear().type(Cypress.env("phoneNumber"))
    }

    /**
  * validates that there is no error message under the first name field, uses firstNameValidationElement from the page locators
  */
    static verifyFirstNameIsValid() {
        cy.get(pageLocators.firstNameValidationElement).should('not.be.visible')
    }

    /**
  * validates that there is no error message under the last name field, uses lastNameValidationElement from the page locators
  */
    static verifyLastNameIsValid() {
        cy.get(pageLocators.lastNameValidationElement).should('not.be.visible')
    }

    /**
  * validates that there is no error message under the postal code field, uses postalCodeValidationElement from the page locators
  */
    static verifyPostalCodeIsValid() {
        cy.get(pageLocators.postalCodeValidationElement).should('not.be.visible')
    }

    /**
  * validates that there is no error message under the email field, uses emailValidationElement from the page locators
  */
    static verifyEmailIsValid() {
        cy.get(pageLocators.emailValidationElement).should('not.exist')
    }

    /**
  * validates that there is no error message under the phone number field, uses phoneValidationElement from the page locators
  */
    static verifyPhoneIsValid() {
        cy.get(pageLocators.phoneValidationElement).should('not.be.visible')
    }

    /**
  * validates that there is no error message under the alternate phone number field, uses alternatePhoneValidationElement from the page locators
  */
    static verifyAlternatePhoneIsValid() {
        cy.get(pageLocators.alternatePhoneValidationElement).should('not.be.visible')
    }
}


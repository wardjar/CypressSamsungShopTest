const pageLocators = {

    guestButton: "#b2C_Continue_Guest",
}

export default class LoginPage {

    /**
  * clicks on the guest checkout button, uses guestButton from the page locators
  */
    static clickGuestLoginButton() {
        cy.get(pageLocators.guestButton).click()
    }
}
const pageLocators = {

    payButton: ".sticky-content > .order-p6-summary-price-details > .os-btn-holder > .btn-primary",
}

export default class CartPage {

    /**
  * clicks on the pay button, uses payButton from the page locators
  */
    static clickPayButton() {
        cy.get(pageLocators.payButton).click()
    }
}
const pageLocators = {

    noExhangeElement: "[title='Tell us your current brand to start trade-in! layer popup'] > .hubble-product__options-list-inner > .s-cta-text",

    addToCartButton: ".hubble-price-bar__price-cta > .cta",

}

export default class SearchPage {

    /**
    * choose the no echange option, uses noExhangeElement from the page locators
    */
    static chooseExchangeOption() {
        cy.get(pageLocators.noExhangeElement).click()
    }

    /**
    * clicks on the add to cart button, uses addToCartButton from the page locators
    */
    static clickAddToCartButton() {
        cy.get(pageLocators.addToCartButton).click()
    }
}
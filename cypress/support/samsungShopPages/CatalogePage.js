const pageLocators = {

    buyButtonElement: ".floating-navigation__button-wrap > :nth-child(2)"
}

export default class CatalogePage {

    /**
     * clicks on the buy button, uses buyButtonElement from the page locators
     */
    static clickButButton() {
        cy.get(pageLocators.buyButtonElement).click()
    }
};

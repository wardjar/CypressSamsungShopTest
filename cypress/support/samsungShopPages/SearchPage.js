const pageLocators = {

    firstItemLocator: ":nth-child(1) > .result-item > .result-item__content > .result-title > .result-title__link > :nth-child(1)",
}


export default class SearchPage {
    /**
   * clicks the first search item in the page, uses firstItemLocator from the page locators
   */
    static clickFirstItem() {
        cy.get(pageLocators.firstItemLocator).click()
    }
}
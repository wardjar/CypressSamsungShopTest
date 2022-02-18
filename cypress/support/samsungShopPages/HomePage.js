const pageLocators = {

    searchIconElement: ".gnb__mobile-menu > .gnb__search-btn > .icon",

    searchBarElement: "#gnb-search-keyword"
}

export default class HomePage {

    /**
     * navigates to home page, uses the default baseurl from the jason file
     */
    static navigateToHome() {
        cy.visit('/')
    }

    /**
     * opens the search tab, uses searchIconElement from the page locators
     */
    static clickSearchIcon() {
        cy.get(pageLocators.searchIconElement).click()
    }

    /**
   * writes the default search term in the search bar, uses searchBarElement from the page locators,
   * and "shopSearch" from the env variables
   */
    static writeDefaultSearch() {
        cy.get(pageLocators.searchBarElement).type(Cypress.env("shopSearch") + '{enter}')
    }

};



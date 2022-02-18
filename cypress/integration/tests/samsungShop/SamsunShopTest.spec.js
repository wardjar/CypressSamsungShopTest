/// <reference types="cypress"/>
import HomePage from '../../../support/samsungShopPages/HomePage.js'
import SearchPage from '../../../support/samsungShopPages/SearchPage.js'
import CatalogePage from '../../../support/samsungShopPages/CatalogePage.js'
import ItemPage from '../../../support/samsungShopPages/ItemPage.js'
import CartPage from '../../../support/samsungShopPages/CartPage.js'
import LoginPage from '../../../support/samsungShopPages/LoginPage.js'
import CheckOutPage from '../../../support/samsungShopPages/CheckoutPage.js'


describe('samsung shop item checkout tests', () => {
  before(() => {

    HomePage.navigateToHome()

    HomePage.clickSearchIcon()

    HomePage.writeDefaultSearch()

    SearchPage.clickFirstItem()

    CatalogePage.clickButButton()

    ItemPage.chooseExchangeOption()

    ItemPage.clickAddToCartButton()

    CartPage.clickPayButton()

    LoginPage.clickGuestLoginButton()

  })

  it('chockoutAddressNegativeTest', () => {

    CheckOutPage.writeInvalidFirstName()

    CheckOutPage.writeInvalidLastName()

    CheckOutPage.writeInvalidPostalCode()

    CheckOutPage.writeInvalidEmail()

    CheckOutPage.writeInvalidPhoneNumber()

    CheckOutPage.writeInvalidAlternatePhoneNumber()

    CheckOutPage.verifyFirstNameValidationError()

    CheckOutPage.verifyLastNameValidationError()

    CheckOutPage.verifyPostalCodeValidationError()

    CheckOutPage.verifyEmailValidationError()

    CheckOutPage.verifyPhoneValidationError()

    CheckOutPage.verifyAlternatePhoneValidationError()
  })

  it('chockoutAddressPositiveTest', () => {

    CheckOutPage.writeFirstName()

    CheckOutPage.writeLastName()

    CheckOutPage.writePostalCode()

    CheckOutPage.writeEmail()

    CheckOutPage.writePhoneNumber()

    CheckOutPage.writeAlternatePhoneNumber()

    CheckOutPage.verifyFirstNameIsValid()

    CheckOutPage.verifyLastNameIsValid()

    CheckOutPage.verifyPostalCodeIsValid()

    CheckOutPage.verifyEmailIsValid()

    CheckOutPage.verifyPhoneIsValid()

    CheckOutPage.verifyAlternatePhoneIsValid()
  })
})


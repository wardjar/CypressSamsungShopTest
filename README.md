# CypressSamsungShopTest
### Cypres projest to test the address page on https://www.samsung.com/in/ shop.

### Test Flow 
- The project starts on the home page, clicks on the search icon, and enters a search term for a certain device
- Then chooses the first item on the search page
- After that it clicks on the buy button found on the item page
- Then directs to the cart page 
- After that it clicks on the pay button
- Then chooses the login as a guest option
- After that on the checkout page invalid inputs are used on the realted field 
- Then verifies that an error messages appears under the fields
- Then inputs a valid input in the same field 
- Then verifies that the error messages has dissapeared

### Results
- Cypress shows the number of excuted tests and the number of sucessful and failed ones.
- If an error occurs a screen shot is generated
- The run is video recorded
- A log file is generated 
- All found in the reports folder

### Project Excution
- Run `npm install` to download the dependancies
- You can run the test using the modified script `npm run test`
- Also you can open the cypress interface to preview the test using `npx cypress open`

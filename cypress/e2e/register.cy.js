import registerPage from '../pom/register';

describe('Login and Registration Test', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
      });
    

    it('should register succesfully', () => {
        const firstName = registerPage.fillFirstName();
        const lastName = registerPage.fillLastName();
        registerPage.fillAddress();
        registerPage.fillCity();
        registerPage.fillState();
        registerPage.fillZipCode();
        // registerPage.fillPhoneNumber();
        registerPage.fillSSN();
        const username = registerPage.fillUsername();
        const password = registerPage.fillPassword();
        registerPage.fillRepeatedPassword();

    cy.get('input[type="submit"][value="Register"]').click();
    //verify that you logged in successfully
    // cy.contains('Welcome,').should('be.visible');
    })
})
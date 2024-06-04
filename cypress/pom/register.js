const { faker } = require("@faker-js/faker");

class RegisterPage {

    fillFirstName() {
        const firstName = faker.person.firstName();
        cy.get('input[name="customer.firstName"]').type(firstName);
        return firstName;
    }

    fillLastName() {
        const lastName = faker.person.lastName();
        cy.get('input[name="customer.lastName"]').type(lastName);
        return lastName;
    }

    fillAddress(){
        cy.get('input[name="customer.address.street"]').type(faker.location.street());
    }

    fillCity(){
        cy.get('input[name="customer.address.city"]').type(faker.location.city());
    }

    fillState(){
        cy.get('input[name="customer.address.state"]').type(faker.location.state());
    }
    fillZipCode(){
        cy.get('input[name="customer.address.zipCode"]').type(faker.location.zipCode());
    }

    // fillPhoneNumber(){
    //     const phoneNumber = faker.phone.phoneNumber();
    //     cy.get('input[name="customer.phoneNumber"]').type(phoneNumber);
    // }

    fillSSN(){ 
        const number =123456789; 
        cy.get('input[name="customer.ssn"]').type(number)
    }

    fillUsername() {
        const username = faker.internet.userName();
        cy.get('input[name="customer.username"]').type(username);
        return username;
    }

    fillPassword() {
        const password = faker.internet.password();
        cy.get('input[name="customer.password"]').type(password);
        return password;
    }

    fillRepeatedPassword() {
        const repeatedPassword = faker.internet.password();
        cy.get('input[name="repeatedPassword"]').type(repeatedPassword);
        return repeatedPassword;
    }

}

export default new RegisterPage();
describe('Homepage Test', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

  it('Should have a navigation menu', () => {
    // Check if the navigation menu is visible
    cy.get('#mainPanel').should('be.visible');

     // Click on specific navigation links
    cy.get('#mainPanel').within(() => {
    //About Us
    cy.get('#headerPanel ul.leftmenu li a').contains('About Us').click();
    cy.url().should('include', '/about.htm');
    //Services
    cy.get('#headerPanel ul.leftmenu li a').contains('Services').click();
    cy.url().should('include', '/services.htm');
    //Admin Page
    cy.get('#headerPanel ul.leftmenu li a').contains('Admin Page').click();
    cy.url().should('include', '/admin.htm');

    });
  });

  it('Should navigate to the specific page when the Home button is clicked', () => {
    cy.get('#headerPanel ul.button li.home a').trigger('mouseover');
    cy.get('#headerPanel ul.button li.home a').click();
    cy.url().should('include', '/index.htm');

    //ABOUT US
    cy.get('#headerPanel ul.button li.aboutus a').trigger('mouseover');
    cy.get('#headerPanel ul.button li.aboutus a').click();
    cy.url().should('include', '/about.htm');
      
    //CONTACT
    cy.get('#headerPanel ul.button li.contact a').trigger('mouseover');
    cy.get('#headerPanel ul.button li.contact a').click();
    cy.url().should('include', '/contact.htm');
  });
  
  //CONTENT
  it('Should display the main content', () => {
    // Check if the main content container is visible
    cy.get('#leftPanel').should('be.visible');
    cy.get('#rightPanel').should('be.visible');

    //LEFT-PANEL
    it('Should login successfully with valid credentials', () => {
      // Type username and password into the input fields
      cy.get('input[name="username"]').type('valid_username');
      cy.get('input[name="password"]').type('valid_password');
    
      // Submit the form
      cy.get('form[name="login"]').submit();
    });
    
    it('Should display an error message with invalid credentials', () => {
      // Visit the webpage with the login form
      cy.visit('/parabank/login.htm');
    
      // Type invalid username and password into the input fields
      cy.get('input[name="username"]').type('invalid_username');
      cy.get('input[name="password"]').type('invalid_password');
    
      // Submit the form
      cy.get('form[name="login"]').submit();
    
      // Assert that an error message is displayed
      cy.contains('Invalid username or password').should('be.visible');
    });
  });

  it('Should contain a footer', () => {
    // Check if the footer is visible
    cy.get('#footerPanel').should('be.visible');

  });

});

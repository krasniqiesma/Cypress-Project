describe('Testing About Us', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/about.htm');
  });

  it('Verifies the content of the right panel', () => {
    // Verify the title
    cy.get('.title').should('contain', 'ParaSoft Demo Website');

    // Verify the paragraphs
    cy.get('#rightPanel p').should('have.length', 3); // Ensure there are three paragraphs
    cy.get('#rightPanel p').eq(0).should('contain', 'ParaBank is a demo site used for demonstration of Parasoft software solutions.');
    cy.get('#rightPanel p').eq(1).should('contain', 'All materials herein are used solely for simulating a realistic online banking website.');
    cy.get('#rightPanel p').eq(2).should('contain', 'In other words: ParaBank is').find('b').should('contain', 'not').parent().should('contain', ' a real bank!');

    // Verify the link
    cy.get('#rightPanel a').should('have.attr', 'href', 'http://www.parasoft.com/');
    cy.get('#rightPanel a').should('contain', 'www.parasoft.com');

    // Verify the phone number
    cy.get('#rightPanel').contains('888-305-0041');
  });
});

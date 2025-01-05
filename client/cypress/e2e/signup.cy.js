describe('Signup Flow', () => {
  const BASE_URL = 'http://localhost:5000'; 
  const FRONTEND_URL = 'http://localhost:3000'; 
  const uniqueUsername = `testuser_${Date.now()}_${Math.floor(Math.random() * 1000)}`; //randon

  it('should allow a user to sign up', () => {
    cy.visit(`${FRONTEND_URL}/signup`);

    cy.get('input#username').type(uniqueUsername);
    cy.get('input#password').type('password123');
    cy.get('button[type="submit"]').click();

    // Verify 
    cy.url().should('include', '/login');

  });
});
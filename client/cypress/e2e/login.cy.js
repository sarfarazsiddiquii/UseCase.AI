describe('=Login Flow', () => {
    const BASE_URL = 'http://localhost:5000'; 
    const FRONTEND_URL = 'http://localhost:3000'; 
  
    it('should allow a user to log in', () => {
  
      cy.visit(`${FRONTEND_URL}/login`);
      cy.get('input#username').type('sarfaraz');
      cy.get('input#password').type('12345');
      cy.get('button[type="submit"]').click();
  
      // verify 
      cy.url().should('include', '/usecase');
  
    });
});
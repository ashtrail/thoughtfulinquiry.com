describe('Basic website layout', () => {
  it('should display header', () => {
    cy.visit('/')
    cy.get('header').should('exist')
    cy.getBySel('site-logo').should('exist')
  })
})

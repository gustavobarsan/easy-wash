context("Landing Page",()=>{
  it('Testing the elements of the landpage',()=>{
    cy.viewport(900,700)
    cy.visit('http://localhost:3000/')

    cy.contains('Login')
    cy.contains('Register')
    cy.contains('Easy Wash')
    
  })
})
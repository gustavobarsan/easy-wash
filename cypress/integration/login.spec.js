context("Login Page", ()=>{
  it('logs in with faild credentials',()=>{


    cy.viewport(1440,900)
    cy.visit('http://localhost:3000/login')

    cy.contains('Email')
    cy.contains('Senha')
    cy.contains('Entrar')
    
    cy.get('.MuiButtonBase-root').contains('Entrar')

    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('edimara@hotmail.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('1234')
    
    cy.server();
    cy.route({
          method: "POST",
          url: '/login'
    }).as("login");

    cy.get('.MuiButtonBase-root > .MuiButton-label').last().click();

    cy.contains('Joao matos de almeida, 458 - Vila Zumbi dos Palmares, colombo')
    
  })
})
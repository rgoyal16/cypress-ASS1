/// <reference types="cypress" />

it('google',function(){

    cy.visit('https://google.com/')
    cy.get('.gLFyf').type('hello{enter}')
    cy.contains('Videos').click
})

   
    
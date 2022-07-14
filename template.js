/// <reference types="Cypress" />

/* cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
    return false;  
  }) */

describe(" ", () =>{ //título de la prueba (p.ej.---> login)

    it(' ', () => { //nombre del paso (p.ej.---> ingresar a la página)
        cy.visit(" ")
    });//paso n

})//describe

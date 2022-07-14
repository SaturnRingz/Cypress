/// <reference types="Cypress" />

describe("Usando clicks", () =>{ //título de la prueba (p.ej.---> login)

    it('ingresar a la página', () => { //nombre del paso (p.ej.---> ingresar a la página)
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should("eq","ToolsQA");
        cy.wait(2000);
    });//paso n
    it('Completar nombre, apellido y correo', () => {
        cy.get('#firstName').type("Calamardo").tab().
        type("Tentáculos").tab().
        type("calamardotentaculos@gmail.com")
    });
    it('Click simple en Géneros', () => {
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').should("be.visible").click();
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').should('be.visible').click();
        cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').should('be.visible').click();
    });

})//describe
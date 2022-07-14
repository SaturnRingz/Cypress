/// <reference types="Cypress" />

/* cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
    return false;  
  }) */

describe("Selector types", () =>{ //título de la prueba (p.ej.---> login)

    it('Visit webpage', () => { //nombre del paso (p.ej.---> ingresar a la página)
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq','ToolsQA');
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false; 
        });//paso n
    })
    describe("Selector by ID",()=>{

        it('Bad usage of an ID Selector (gonna fail)', () => {
            cy.get('userName').type('Juan');
        });
        it('Good usage of an ID Selector', () => { //id uses '#' to declare
            cy.get('#userName').type('Juan');
        });
    })
    describe("Selector by attributes",()=>{

        it('Bad usage of an Attriute Selector (gonna fail)', () => {
            cy.get('placeholder="name@example.com"').type('Doctrina');
        });
        it('Good usage of an Attribute Selector', () => { //attribute  uses '[]' to declare
            cy.get('[placeholder="name@example.com"]')
            .should('be.visible')
            .type('Doctrina');
        });
    })
    describe("Selector by Xpath",()=>{

        it('Bad usage of an Xpath Selector (gonna fail)', () => {
            cy.get('//*[@id="currentAddress"]').type('Doctrina');
        });
        it('Good usage of an Xpath Selector', () => { //xpath is a syntax to navigate through XML
            cy.xpath('//*[@id="currentAddress"]')
            .should('be.visible')
            .type('Thames 1961, Capital Federal');
        });
    })
    describe("Selector by Contain",()=>{

        it('Bad usage of a Contain Selector (gonna fail)', () => {
            cy.get('//*[@id="currentAddress"]').type('Doctrina');
        });
        it('Good usage of a Contain Selector', () => { //attribute  uses '[]' to declare
            cy.xpath('//*[@id="currentAddress"]')
            .should('be.visible')
            .type('Thames 1961, Capital Federal');
        });
    })
})
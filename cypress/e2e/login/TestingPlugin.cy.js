///<reference types="Cypress"/>

describe("Usando Tab en una página", () =>{
    it('visitar página', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;})
        cy.visit("https://demoqa.com/automation-practice-form");
    });
    it('buscar elemento', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;})
        cy.get('#firstName').type("Dolores").tab().
        type("Albahaca").tab().
        type("Doloresalbahaca@gmail.com")
    }); 
})
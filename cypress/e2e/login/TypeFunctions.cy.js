///<reference types="Cypress"/>

describe("Funciones para Type Script",() =>{
    /* it('Type ENTER', () => {
        cy.visit("https://www.google.com/");
        cy.title().should("eq", "Google");
        cy.get(".gLFyf").type("Cypress IO{enter}")
    }); */

    it('PageUp', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pageup}");
    })
    it('PageDown', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pagedown}");
    })
    it('PageUp', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pageup}");
    })
    it('PageDown', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pagedown}");
    })
    it('PageUp', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pageup}");
    })
    it('PageDown', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pagedown}");
    })
    it('PageUp', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pageup}");
    })
    it('PageDown', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pagedown}");
    })
    it('PageUp', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pageup}");
    })
    it('PageDown', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pagedown}");
    })
    it('PageUp', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pageup}");
    })
    it('PageDown Ultimo', () => {
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
          })
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq","ToolsQA");
        cy.get('#currentAddress').type("{pagedown}");
    })
})
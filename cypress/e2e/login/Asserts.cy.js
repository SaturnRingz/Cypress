///<reference types="Cypress"/>

describe("Introducción a Asserts", () => {
        it('Asserts', () => {
            cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
                return false;  
              })
            cy.visit("https://demoqa.com/automation-practice-form");
            cy.wait(1000);
            cy.title().should("eq","ToolsQA");
            cy.wait(1000);
            cy.get("#firstName").should("be.visible").type("Alfonzo");
            cy.wait(1000);
            cy.get("#lastName").should("be.visible").should("be.enabled").type("Carriales");
        });
})
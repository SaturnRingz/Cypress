///<reference types="Cypress"/>

describe("Reto básico de cypress", () =>{

    cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
        return false;  
    })

    it('Visit the website', () => {
        cy.visit("https://demoqa.com/webtables");
        cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba. Ponlo al inicio de cada paso
            return false;  
        })
    });
    
    it('Find the search bar', () => {
        cy.get('#searchBox').should('be.visible').should('be.enabled');
    });
    it('Search a name that exist in the table', () => {
        cy.get('#searchBox').type('Cierra');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').contains('Cierra').should('be.visible');
        cy.wait(2000);
        cy.get('#searchBox').clear();
    });
    it('Search a name that DOES NOT exist', () => {
        cy.get('#searchBox').type('Sanderson');
        cy.get('.rt-noData')
        .should('be.visible');
        cy.wait(2000);
        cy.get('#searchBox').clear();
    });
    it('Click Add to attach a new person', () => {
        cy.get('#addNewRecordButton').click();
    });
    it('Verify modal generation', () => {
        cy.get('.modal').should('be.visible');
    });
    it('Verify modal title', () => {
        cy.get('#registration-form-modal').contains('Registration Form').should('be.visible');
    });
    it('Verify wording at modal form', () => {
        cy.get('#firstName-label').contains('First Name');
        cy.get('#lastName-label').contains('Last Name');
        cy.get('#userEmail-label').contains('Email');
        cy.get('#age-label').contains('Age');
        cy.get('#salary-label').contains('Salary');
        cy.get('#department-label').contains('Department')
    });
    it('Fullfil form', () => {
        cy.get('#firstName').type('Fulgencio').tab()
        .type('Anacarado').tab()
        .type('anacafulge@fulful.si').tab()
        .type('48').tab()
        .type('50000').tab()
        .type('Ministro de la felicidac');
    });
    it('Submit', () => {
        cy.get('#submit').should('be.visible')
        .should('be.enabled')
        .click();
    });
    it('Verify', () => {
        cy.get('#searchBox').type('Fulgencio');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)')
        .contains('Fulgencio')
        .should('be.visible');
    });
    it('Edit created profile', () => {
        cy.get('#edit-record-4 > svg > path').click();
        cy.get('#department')
        .clear()
        .type('recursos humanos');
        cy.get('#lastName')
        .clear()
        .type('Honorable');
        cy.get('#submit').should('be.visible')
        .should('be.enabled')
        .click();
    });
    it('Verify edition', () => {
        cy.get('#searchBox')
        .clear()
        .type('Fulgencio');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)')
        .contains('Honorable')
        .should('be.visible');
        cy.wait(2000);
    });
    it('Delete test data', () => {
        cy.get('#delete-record-4 > svg > path').click();
        cy.get('.rt-noData')
        .should('be.visible');
        cy.wait(2000);
    });
})
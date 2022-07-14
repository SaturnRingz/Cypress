///<reference types="Cypress"/>

it('Ingresar a la página', () => {
    cy.visit("https://demoqa.com/text-box");
})

it('Validar título de la página', () => {
    cy.title().should("eq", "ToolsQA");
});

it('Escribir nombre en casilla nombre', () => {
    cy.get("#userName").type("Yaajaira");
});

it('Escribir correo', () => {
    cy.get("#userEmail").type("Yajaira@yosemiti.com")
});

it('Escribir dirección', () => {
    cy.get("#currentAddress").type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique consectetur mattis. Nunc rutrum arcu eu urna convallis pellentesque. Nullam bibendum pulvinar odio, nec iaculis metus pulvinar eget. Nullam interdum lacus efficitur quam molestie, vitae suscipit neque ultricies. Maecenas ullamcorper iaculis diam, sit amet finibus leo scelerisque feugiat. Nulla venenatis iaculis metus, a fringilla nisl aliquam quis. Pellentesque in libero odio. Nulla eget mattis purus. Fusce pretium quis nisl nec facilisis. Nulla a malesuada augue, in vulputate ante. Suspendisse et risus vitae leo faucibus pharetra sed at felis. Fusce consectetur eros a sapien ultricies, at pulvinar turpis posuere. Duis quis sodales nulla. Ut egestas ante sit amet elementum sodales... ")
});

it('Escribir dirección permanente', () => {
    cy.get("#permanentAddress").type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique consectetur mattis. Nunc rutrum arcu eu urna convallis pellentesque. Nullam bibendum pulvinar odio, nec iaculis metus pulvinar eget. Nullam interdum lacus efficitur quam molestie, vitae suscipit neque ultricies. Maecenas ullamcorper iaculis diam, sit amet finibus leo scelerisque feugiat. Nulla venenatis iaculis metus, a fringilla nisl aliquam quis. Pellentesque in libero odio. Nulla eget mattis purus. Fusce pretium quis nisl nec facilisis. Nulla a malesuada augue, in vulputate ante. Suspendisse et risus vitae leo faucibus pharetra sed at felis. Fusce consectetur eros a sapien ultricies, at pulvinar turpis posuere. Duis quis sodales nulla. Ut egestas ante sit amet elementum sodales... ")
});


/* describe("alfa mod1", () =>{

it('mi primer hola mundo', () => {

    cy.log("hola mundo");
    cy.wait(1000);
});
it('ingresar a la página', () => {
    cy.visit("https://www.mercadolibre.com.ar/");
    cy.get(".nav-search-input").type("acetaminofén");
    cy.on('uncaught:exception', (err, runnable) => { //en caso de que existan uncaught exceptions en la página de prueba
      return false;  
    })
});

})//describe */
describe('Test contact us form via WebdriverUni', () => { 
    
    it('Should be able to submit a successful submission via contact us form as all fields are required', () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Sol");
        cy.get('[name="last_name"]').type("Gonzalez");
        cy.get('[name="email"]').type('sol@cypress.com');
        cy.get('textarea.feedback-input').type("probando cypress");
        cy.get('[type="submit"]').click()

    });

    it('Should not be able to submit a succesul submission via contact form as all fields are required', () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Elisa");
        cy.get('[name="last_name"]').type("Vidal");
        cy.get('textarea.feedback-input').type("probando cypress 2");
        cy.get('[type="submit"]').click()
    });
 })
describe('Test contact us form via Automation Test Store', () => { 
    
    it('Should be able to submit a successful submission via contact us form as all fields are required', () => {
        cy.visit("https://automationteststore.com/");
        //cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.xpath('//a[contains(@href, "contact")]').click();
        cy.get('#ContactUsFrm_first_name').type("Solange");
        cy.get('#ContactUsFrm_email').type("sol@test.com");
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?");
        cy.get('button[title="Submit"]').click();

    });

 })
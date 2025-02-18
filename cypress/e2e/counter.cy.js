describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display the initial counter value', () => {
    cy.get("h3").should("contain.text", "Value Of Counter : 0");
  })

  it('should increase the counter when the increase button is clicked', () => {
    cy.get("#value_inc").type("5");
    cy.wait(2500);
    cy.get(".button_inc").click();
    cy.wait(2500);
    cy.get("h3").should("contain.text", "Value Of Counter : 5");

  });

  it('should decrease the counter when the decrease button is clicked', () => {
    cy.get("#value_dec").type("3");
    cy.wait(2500);
    cy.get(".button_dec").click();
    cy.wait(2500);
    cy.get("h3").should("contain.text", "Value Of Counter : -3");

  });

  it('should add multipl logs and delete them when clicked', () => {
    cy.get("#value_inc").type("3");
    cy.wait(2500);
    cy.get(".button_inc").click();
    cy.wait(2500);
    cy.get("h3").should("contain.text", "Value Of Counter : 3");

    cy.get("#value_dec").type("2");
    cy.wait(2500);
    cy.get(".button_dec").click();
    cy.wait(2500);
    cy.get("h3").should("contain.text", "Value Of Counter : 1");
//ensure both logs are present
    cy.get(".button_info").click();
    cy.get(".log_info").should("have.length", 2);    
    cy.wait(2500);
    //delete the forst log
    cy.get(".log_info").first().click();
    cy.get(".log_info").should("have.length", 1);
    cy.wait(2500);
    //delete the second log
    cy.get(".log_info").first().click();
    cy.get(".log_info").should("not.exist");
    cy.wait(2500);

    cy.get(".log_container").should("not.exist");

  });
})
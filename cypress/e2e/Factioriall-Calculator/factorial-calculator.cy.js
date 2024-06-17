describe("Factorial Number", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("https://qainterview.pythonanywhere.com/", {
      headers: {
        "Accept-Encoding": "gzip, deflate"
      }
    })
  });


  it("Check Tittle Page" , () =>{
    cy.visit("https://qainterview.pythonanywhere.com/", {
        headers: {
          "Accept-Encoding": "gzip, deflate"
        }
      })
    cy.title().should("eq", "Factoriall");
    cy.get('.col-md-6 > .margin-base-vertical')
    .should("be.visible")
    .should('have.text', 'The greatest factorial calculator!')
  });


  it("Check already text on webpage" , () =>{

    cy.get('.col-md-6 > .margin-base-vertical')
    .should("be.visible")
    .should('have.text', 'The greatest factorial calculator!')
  });

  it("Already have text placeholder" , () =>{

    cy.get('#number').should("be.visible")
    .should('have.attr', 'placeholder', 'Enter an integer')
  });


  it("Check Button" , () =>{

      cy.get('#getFactorial')
      .contains('Calculate')
    });

    it('Check Term condition and privacy', () => {
        
      cy.get('[href="/privacy"]').should("be.visible").contains('Terms and Conditions')

      cy.get('[href="/terms"]').should("be.visible").contains('Privacy')
    });

    it('Get Wrong input', () => {

      cy.get('#number').type(userID_Alpha_Numeric())      

      function userID_Alpha_Numeric() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;

      }

      cy.get('#getFactorial').click()
      cy.get(':nth-child(2) > .col-md-6').wait(6000).should("be.visible").should('have.text', '\n                Please enter an integer\n            ')
      .wait (4000)
      cy.screenshot()
    });


    it('Get correct input', () => {

      cy.get('#number').type(userID_Alpha_Numeric())      

      function userID_Alpha_Numeric() {
        var text = "";
        var possible = "1234567890";

        for (var i = 0; i < 1; i++) 
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;

      }

      cy.get('#getFactorial').click().wait(4000)

      cy.screenshot()
    
    });


});
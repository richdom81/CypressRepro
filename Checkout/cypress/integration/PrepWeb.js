describe('PrepWeb Ecom - Desktop', function () {
  it('Validate Title', function () {
    // https://on.cypress.io/visit
    cy.visit('https://www.prepsportswear.com')
    cy.title().should('include', 'Prep Sportswear')
  })

  context('Checkout Tests', function () {
      // Visiting our app before each test removes any state build up from
      // previous tests. Visiting acts as if we closed a tab and opened a fresh one
   it('Guest Checkout', function(){ 
     cy.visit('https://www.prepsportswear.com')
     cy.get('#newsletter-modal-close > .fa').click()
     cy.get(':nth-child(1) > .gutter > .tile-well > a').click()
     cy.get('#qa-id-Texas').click()
     cy.get('.pagination > ul > :nth-child(5) > a').click()
     cy.get('#qa-id-city-El\\ Paso').click()
     cy.get('#qa-id-city-Riverside\\ High').click()
     cy.get('#qa-id-shop-T-Shirts').click()
     cy.get('#uxProductList > :nth-child(1) > :nth-child(4)').click()

  })
})
})
 
/* eslint-disable no-undef, jest/expect-expect */
context('Main page', () => {
  before(() => {
    cy.visit('/')
  })

  it('should have all fields from "Você receberá"', () => {
    cy.get('input')
      .first()
      .type('22,22')

    cy.get('input')
      .eq(1)
      .type('12')

    cy.get('input')
      .eq(2)
      .type('1')

    cy.get('button').click()

    cy.wait(4000)

    cy.get('p').eq(4).should('contain', '20,57')
    cy.get('p').eq(5).should('contain', '20,68')
    cy.get('p').eq(6).should('contain', '20,79')
    cy.get('p').eq(7).should('contain', '21,17')
  })
})

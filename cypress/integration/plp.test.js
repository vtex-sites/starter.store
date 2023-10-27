import { cypress } from '../../faststore.config'

const { pages } = cypress

describe('PLP tests', () => {
  it('visit collection page', () => {
    cy.visit(pages.collection)
    cy.get('[data-testid="product-gallery"]').should('exist').and('be.visible')
  })
})
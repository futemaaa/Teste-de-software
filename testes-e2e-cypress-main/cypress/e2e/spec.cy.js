describe('Página Inicial', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')

  })

  it('Deve renderizar o h2 com o texto correto!', () => {
    cy.getByData('textos01').contains('Vantagens do nosso banco:')
  })

  it('Deve renderizar h3 com o texto correto!', () => {
    cy.getByData('textos02').contains('Conta e cartão gratuitos')
  })


  it('Deve renderizar p com o texto correto!', () => {
    cy.getByData('paragrafo01').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
  it('Deve renderizar img com uma imagem', () => {
    cy.getByData('imagem').should('be.visible')
  })
})
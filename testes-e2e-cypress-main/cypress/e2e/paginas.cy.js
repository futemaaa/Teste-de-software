describe('Testando múltiplas páginas', () => {
    beforeEach('Deve conseguir acessar a página de cartões', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type('neilton@alura.com')
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()

    })


    it('Deve conseguir acessar a página de cartões', () => {

    cy.getByData('app-home').find('a').eq(1).click()
    cy.location('pathname').should('eq','/home/cartoes')
    cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
    })

    it('Deve conseguir acessar a página de investimentos', () => {

    cy.getByData('app-home').find('a').eq(3).click()
    cy.location('pathname').should('eq','/home/investimentos')
    })

    it('Deve conseguir acessar a página de serviços', () => {

    cy.getByData('app-home').find('a').eq(2).click()
    cy.location('pathname').should('eq','/home/servicos')
    })

    })
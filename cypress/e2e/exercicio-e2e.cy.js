/// <reference types="cypress" />
import page from "../support/page_objects/nome-funcionliada.page";
const perfil = require('../fixtures/perfil.json')
const form = require('../fixtures/checkout_form.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    page.visitUrl()
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    page.login(perfil.usuario, perfil.senha)
    const usuarioNome = perfil.usuario.split('@')[0];
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', `Olá, ${usuarioNome} (não é ${usuarioNome}? Sair)`)

    page.searchProduct('Augusta Pullover Jacket')
    cy.get('.product_title').should('contain', 'Augusta Pullover Jacket')
    page.addProductToCart('S', 'Orange', 1)
    cy.get('.woocommerce-message').should('contain', '“Augusta Pullover Jacket” foi adicionado no seu carrinho.')

    page.searchProduct('Autumn Pullie')
    cy.get('.product_title').should('contain', 'Autumn Pullie')
    page.addProductToCart('M', 'Green', 1)
    cy.get('.woocommerce-message').should('contain', '“Autumn Pullie” foi adicionado no seu carrinho.')

    page.searchProduct('Sinbad Fitness Tank')
    cy.get('.product_title').should('contain', 'Sinbad Fitness Tank')
    page.addProductToCart('L', 'Blue', 1)
    cy.get('.woocommerce-message').should('contain', '“Sinbad Fitness Tank” foi adicionado no seu carrinho.')

    page.searchProduct('Geo Insulated Jogging Pant')
    cy.get('.product_title').should('contain', 'Geo Insulated Jogging Pant')
    page.addProductToCart('36', 'Red', 1)
    cy.get('.woocommerce-message').should('contain', '“Geo Insulated Jogging Pant” foi adicionado no seu carrinho.')

    page.goToCart()

    page.goToCheckout()

    page.fillFormCheckout(form.firstName, form.lastName, form.country, form.street, form.complement, form.city, form.state, form.zipCode, form.phone, form.email)
  });
})
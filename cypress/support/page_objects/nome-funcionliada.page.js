class NomeClasse {

    visitUrl() {
        cy.visit('minha-conta')
    }

    login(usuario, senha) {
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
    }

    searchProduct(produto) {
        cy.get('[name="s"]').eq(1).type(produto)
        cy.get('.button-search').eq(1).click()
    }

    addProductToCart(tamanho, cor, quantidade) {
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    goToCart() {
        cy.get('.woocommerce-message > .button').click()
    }

    goToCheckout() {
        cy.get('.checkout-button').click()
    }

    fillFormCheckout(firstName, lastName, country, street, complement, city, state, zipCode, phone, email) {
        cy.get('#billing_first_name').clear().type(firstName)
        cy.get('#billing_last_name').clear().type(lastName)
        cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click()
        cy.get('.select2-search__field').type(country)
        cy.get('#billing_address_1').type(street)
        cy.get('#billing_address_2').clear().type(complement)
        cy.get('#billing_city').clear().type(city)
        cy.get('#billing_state_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').click()
        cy.get('.select2-search__field').type(state)
        cy.get('#billing_postcode').clear().type(zipCode)
        cy.get('#billing_phone').clear().type(phone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#terms').click()
        cy.get('#place_order').click()

        
    }

}

export default new NomeClasse()
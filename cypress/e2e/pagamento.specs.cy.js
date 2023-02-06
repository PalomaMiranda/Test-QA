import searchActions from "../support/pages/pesquisa/index";
import paymentActions from "../support/pages/pagamento/index";

describe("Teste Seguros Promo", function () {
    beforeEach(() => {

        cy.visit("/");
        cy.ignoreLoopLimitExceeded();
        cy.ignoreCannotReadId();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
    });

    it("Geração de pedido utilizando o último produto listado na tela de pesquisa.", function () {
        searchActions.clickPopUpButton();
        searchActions.clickSelectButton();
        paymentActions.clickButtonContinue();
        paymentActions.dadosSegurado();
        paymentActions.pagamentoBoleto();
        paymentActions.transferirInfos();
        paymentActions.dadosContato();
        paymentActions.finalizarPagamento();
    });

    it("Geração de pedido com a seguinte forma de pagamento: Cartão de crédito.", function () {
        searchActions.clickPopUpButton();
        searchActions.clickSelectButton();
        paymentActions.clickButtonContinue();
        paymentActions.dadosSegurado();
        paymentActions.pagamentoCartaoCredito();
        paymentActions.dadosCartao();
        paymentActions.dadosContato();
        paymentActions.finalizarPagamento();
    });

    it("Inserção de cupom de desconto na tela de pagamento do Seguros Promo.", function () {
        searchActions.clickPopUpButton();
        searchActions.clickSelectButton();
        paymentActions.clickButtonContinue();
        paymentActions.dadosSegurado();
        paymentActions.pagamentoBoleto();
        paymentActions.transferirInfos();
        paymentActions.dadosContato();
        paymentActions.cupomDesconto();
        paymentActions.finalizarPagamento();
    });

});


import { el } from "./elements";

class paymentActions {
    clickButtonContinue() {
        cy.get(el.continueButton).click();
    }

    dadosSegurado() {
        cy.get(el.nomeSegurado).type("Felipe André Raul Assis");
        cy.get(el.nascimentoSegurado).type("04/02/1958");
        cy.get(el.cpfSegurado).type("84678723226");
    }

    pagamentoCartaoCredito() {
        cy.get(el.cartaoCredito).should("be.visible");
        cy.get(el.cartaoCredito).click();
    }

    pagamentoBoleto() {
        cy.get(el.boleto).should("be.visible");
        cy.get(el.boleto).click();
    }

    transferirInfos() {
        cy.get(el.transferirInfos).should("be.visible");
        cy.get(el.transferirInfos).click();
    }

    dadosContato() {
        cy.get(el.nomeContato).type("Felipe André Raul Assis");
        cy.get(el.emailContato).type("joaquimjosé10@gmail.com");
        cy.get(el.telefoneContato).type("11999999999");
        cy.get(el.cepContato).type("02725050");
        cy.get(el.numeroContato).type("28");
        cy.get(el.complementoContato).type("Apartamento 11");
        cy.get(el.selecioneEstadoContato).type("São Paulo");
    }

    finalizarPagamento() {
        cy.get(el.efetuarPagamento).should("be.visible");
        cy.get(el.efetuarPagamento).click();
    }

    dadosCartao() {
        cy.get(el.masterCard).should("be.visible");
        cy.get(el.masterCard).click();
        cy.get(el.cartao).type("5401689389702139");
        cy.get(el.nomeCartao).type("Felipe André Raul Assis");
        cy.get(el.cpfCartao).type("84678723226");
        cy.get(el.mesCartao).find("option:contains('10')").then(option => {
            option.prop("selected", true);
            option.click();
        });

        cy.get(el.anoCartao).find("option:contains('2024')").then(option => {
            option.prop("selected", true);
            option.click();
        });

        cy.get(el.cvvCartao).type("428");
        cy.get(el.parcelamentoCartao).should("be.visible");
        cy.get(el.parcelamentoCartao).click();
    }

    cupomDesconto() {
        cy.get(el.cupom).type("AMOPROMO");
        cy.get(el.buttonCupom).should("be.visible");
        cy.get(el.buttonCupom).click();
    }

};

export default new paymentActions();
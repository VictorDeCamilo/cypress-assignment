/// <reference types="cypress" />

import * as users from "../utils/user";

describe("Testes de Frontend", () => {
  context("Cenários com usuário comum", () => {
    beforeEach(() => {
      let user = users.validCommonUser();
      cy.createUserAPI(user).then(({ status, body }) => {
        expect(status).to.eq(201);
        expect(body.message).to.contain("Cadastro realizado com sucesso");

        cy.loginViaAPI(user);
      });
    });

    it("Adicionar dois produtos na lista de compra como usuário comum", () => {
      cy.goToProductDetailsPage(0);
      cy.getProductName("product1");
      cy.addProductToList();

      cy.get("[data-testid='paginaInicial']").click();

      cy.goToProductDetailsPage(1);
      cy.getProductName("product2");
      cy.addProductToList();

      cy.contains("Lista de Compras").should("be.visible");
      cy.url().should(
        "contain",
        `${Cypress.env("frontUrl")}/minhaListaDeProdutos`
      );

      cy.get("@product1").then((name) => {
        cy.contains(name).should("be.visible");
      });

      cy.get("@product2").then((name) => {
        cy.contains(name).should("be.visible");
      });
    });

    it("Limpar lista de compras como usuário comum", () => {});
  });

  context("Cenários com usuário administrador", () => {
    it("Cadastrar novo produto como usuário administrador", () => {});
  });
});

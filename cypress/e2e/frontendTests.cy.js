/// <reference types="cypress" />

import * as users from "../utils/user";
import * as products from "../utils/product";

describe("Testes de Frontend", () => {
  context("Cenários com usuário comum", () => {
    beforeEach(() => {
      let user = users.validCommonUser();
      cy.createUserAPI(user).then(({ status, body }) => {
        expect(status).to.eq(201);
        expect(body.message).to.contain("Cadastro realizado com sucesso");

        cy.loginViaAPI(user);
        cy.visit("https://front.serverest.dev/home");
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

    it("Limpar lista de compras como usuário comum", () => {
      cy.goToProductDetailsPage(0);
      cy.getProductName("product1");
      cy.addProductToList();

      cy.get("[data-testid='shopping-cart-product-name']").should("be.visible");
      cy.get("[data-testid='limparLista']").should("be.visible").click();
      cy.get("[data-testid='shopping-cart-product-name']").should("not.exist");
      cy.get("[data-testid='shopping-cart-empty-message']")
        .should("be.visible")
        .and("have.text", "Seu carrinho está vazio");
    });
  });

  context("Cenários com usuário administrador", () => {
    beforeEach(() => {
      let user = users.validAdminUser();
      cy.createUserAPI(user).then(({ status, body }) => {
        expect(status).to.eq(201);
        expect(body.message).to.contain("Cadastro realizado com sucesso");

        cy.loginViaAPI(user);
        cy.visit("https://front.serverest.dev/admin/home");
      });
    });

    it("Cadastrar novo produto como usuário administrador", () => {
      let product = products.newProduct();
      cy.get("[data-testid='cadastrarProdutos']").should("be.visible").click();
      cy.createProductViaFRONT(product);
      cy.contains("Lista dos Produtos").should("be.visible");
      cy.contains(product.name).should("be.visible");
      cy.contains(product.price).should("be.visible");
      cy.contains(product.description).should("be.visible");
      cy.contains(product.quantity).should("be.visible");
    });
  });
});

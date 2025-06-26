Cypress.Commands.add("addProductToList", () => {
  cy.get("[data-testid='adicionarNaLista']").eq(0).click();
});

Cypress.Commands.add("goToProductDetailsPage", (item) => {
  cy.get("[data-testid='product-detail-link']").eq(item).click();
});

Cypress.Commands.add("getProductName", (alias) => {
  cy.get('[data-testid="product-detail-name"]')
    .invoke("text")
    .should("not.be.empty")
    .as(alias);
});

Cypress.Commands.add("createProductViaFRONT", (product) => {
  cy.get("[data-testid='nome']")
    .should("be.visible")
    .clear()
    .type(product.name);

  cy.get("[data-testid='preco']")
    .should("be.visible")
    .clear()
    .type(product.price);

  cy.get("[data-testid='descricao']")
    .should("be.visible")
    .clear()
    .type(product.description);

  cy.get("[data-testid='quantity']")
    .should("be.visible")
    .clear()
    .type(product.quantity);

  cy.get("[data-testid='cadastarProdutos']").should("be.visible").click();
});

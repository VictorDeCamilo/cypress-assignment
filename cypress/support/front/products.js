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

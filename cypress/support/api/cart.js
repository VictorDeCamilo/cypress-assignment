Cypress.Commands.add("createCart", (products, token) => {
  cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/carrinhos`,
    body: {
      produtos: products,
    },
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("cancelCart", (token) => {
  cy.request({
    method: "DELETE",
    url: `${Cypress.env("apiUrl")}/carrinhos/cancelar-compra`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("findOneCart", (cartId, token) => {
  cy.request({
    method: "GET",
    url: `${Cypress.env("apiUrl")}/carrinhos/${cartId}`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

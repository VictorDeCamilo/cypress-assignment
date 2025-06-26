Cypress.Commands.add("createProductAPI", (product, token) => {
  cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/produtos`,
    body: {
      nome: product.name,
      preco: product.price,
      descricao: product.description,
      quantidade: product.quantity,
    },
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("findOneProduct", (productId, token) => {
  cy.request({
    method: "GET",
    url: `${Cypress.env("apiUrl")}/produtos/${productId}`,
    headers: {
      Authorization: token,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("createUserAPI", (userData) => {
  cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/usuarios`,
    body: {
      nome: userData.name,
      email: userData.email,
      password: userData.password,
      administrador: userData.administrator,
    },
    failOnStatusCode: false,
  });
});

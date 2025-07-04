Cypress.Commands.add("loginViaAPI", (userData) => {
  cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/login`,
    body: {
      email: userData.email,
      password: userData.password,
    },
    failOnStatusCode: false,
  }).then(({ status, body }) => {
    expect(status).to.eq(200);
    expect(body.message).to.contain("Login realizado com sucesso");
    window.localStorage.setItem("serverest/userToken", body.authorization);
    window.localStorage.setItem("serverest/userEmail", userData.email);
    window.localStorage.setItem("serverest/userPassword", userData.password);
  });
});

Cypress.Commands.add("generateUserToken", (user) => {
  cy.createUserAPI(user).then(({ status, body }) => {
    expect(status).to.eq(201);
    expect(body.message).to.contain("Cadastro realizado com sucesso");

    cy.loginViaAPI(user);
  });
});

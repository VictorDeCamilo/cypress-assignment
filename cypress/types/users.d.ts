export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * @description Requisição para cadastrar novos usuários via API
       * @param {object} userData - Objeto com as informações do usuário
       */
      createUserAPI(
        userData: object
      ): Chainable<{ message: string; _id: string }>;
    }
  }
}

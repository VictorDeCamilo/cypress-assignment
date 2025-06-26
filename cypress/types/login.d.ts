export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * @description Requisição para realizar login de forma programática
       * @param {object} userData - Objeto com as informações do usuário
       */
      loginViaAPI(
        userData: object
      ): Chainable<{ message: string; authorization: string }>;

      /**
       * @description Requisição para gerar token de usuário e setar no localStorage
       * @param {object} userData - Objeto com as informações do usuário
       */
      generateUserToken(user: object);
    }
  }
}

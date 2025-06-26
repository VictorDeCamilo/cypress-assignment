export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * @description Requisição para cadastrar carrinho via API
       * @param {object} products - Payload com os produtos e quantidades
       * @param {string} token - Token de autenticação
       */
      createCart(products: object, token: string);

      /**
       * @description Requisição para cancelar compra de carrinho via API
       * @param {string} token - Token de autenticação
       */
      cancelCart(token: string);

      /**
       * @description Requisição para consultar detalhes de um carrinho
       * @param {string} cartId - ID do carrinho
       * @param {string} token - Token de autenticação
       */
      findOneCart(cartId: string, token: string);
    }
  }
}

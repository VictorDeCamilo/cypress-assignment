export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * @description Comando para adicionar item para a lista de compras a partir da tela de detalhes do item
       */
      addProductToList();

      /**
       * @description Comando direcionar o usuário para a tela de detalhes de um item
       * @item Posição do item que deseja visualizar detalhes
       * @example Se quiser visualizar o primeiro item da tela de home, então ficaria assim: goToProductDetailsPage(0)
       */
      goToProductDetailsPage(item: number);

      /**
       * @description Comando para pegar o nome do produto a partir da tela de detalhes e guardá-lo num alias
       * @as Alias do nome do produto
       */
      getProductName(as: string);

      /**
       * @description Comando para criar novo produto via FRONT, preenchendo os campos da tela de novo produto
       * @product Objeto com as informações do produto
       */
      createProductViaFRONT(product: object);

      /**
       * @description Requisição para criação de produtos via API
       * @product Objeto com as informações do produto
       * @token Token de autenticação
       */
      createProductAPI(product: object, token: string);

      /**
       * @description Requisição para consulta de detalhes de produto via API
       * @productId ID do produto
       * @token Token de autenticação
       */
      findOneProduct(productId: string, token: string);
    }
  }
}

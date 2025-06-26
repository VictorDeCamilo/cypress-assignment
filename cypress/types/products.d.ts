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
    }
  }
}

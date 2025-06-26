/// <reference types="cypress" />

import * as users from "../utils/user";
import * as products from "../utils/product";

describe("Testes de API", () => {
  let commonToken, adminToken, productIds, product;

  beforeEach(() => {
    let adminUser = users.validAdminUser();
    let commonUser = users.validCommonUser();
    product = products.newProduct();

    cy.generateUserToken(commonUser).then(({ body }) => {
      commonToken = body.authorization;
    });

    cy.generateUserToken(adminUser).then(({ body }) => {
      adminToken = body.authorization;
      cy.createProductAPI(product, body.authorization).should(
        ({ status, body }) => {
          expect(status).to.eq(201);
          expect(body.message).to.contain("Cadastro realizado com sucesso");
          productIds = [body._id];
        }
      );
    });
  });

  it("Cancelar compra e validar que o estoque dos produtos do carrinho é reabastecido", () => {
    let cart = products.cartProducts(productIds[0], 1);

    cy.createCart(cart, commonToken).then(({ status, body }) => {
      expect(status).to.eq(201);
      expect(body.message).to.contain("Cadastro realizado com sucesso");

      cy.findOneProduct(productIds[0], commonToken).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.quantidade).to.eq(product.quantity - 1);

        cy.cancelCart(commonToken).then(({ status, body }) => {
          expect(status).to.eq(200);
          expect(body.message).to.contain(
            "Registro excluído com sucesso. Estoque dos produtos reabastecido"
          );

          cy.findOneProduct(productIds[0], commonToken).then(
            ({ status, body }) => {
              expect(status).to.eq(200);
              expect(body.quantidade).to.eq(product.quantity);
            }
          );
        });
      });
    });
  });

  it("Tentar cadastrar mais de um carrinho por usuário", () => {
    let cart = products.cartProducts(productIds[0], 1);

    cy.createCart(cart, commonToken).then(({ status, body }) => {
      expect(status).to.eq(201);
      expect(body.message).to.contain("Cadastro realizado com sucesso");

      cy.createCart(cart, commonToken).then(({ status, body }) => {
        expect(status).to.eq(400);
        expect(body.message).to.contain(
          "Não é permitido ter mais de 1 carrinho"
        );
      });
    });
  });

  it("Cadastrar carrinho com 2 produtos", () => {
    let product2 = products.newProduct();

    cy.createProductAPI(product2, adminToken).then(({ status, body }) => {
      expect(status).to.eq(201);
      expect(body.message).to.contain("Cadastro realizado com sucesso");
      productIds.push(body._id);

      cy.log(productIds);

      let cart = products.cartProducts(productIds[0], 1);
      cart.push({ idProduto: productIds[1], quantidade: 2 });

      cy.log(cart);

      cy.createCart(cart, commonToken).then(({ status, body }) => {
        expect(status).to.eq(201);
        expect(body.message).to.contain("Cadastro realizado com sucesso");

        cy.findOneCart(body._id).should(({ status, body }) => {
          const precoTotal = Number(product.price) + Number(product2.price) * 2;
          expect(status).to.eq(200);

          //Validar que a quantidade e o valor são calculados corretamente
          expect(body.precoTotal).to.eq(precoTotal);
          expect(body.quantidadeTotal).to.eq(3);
        });
      });
    });
  });
});

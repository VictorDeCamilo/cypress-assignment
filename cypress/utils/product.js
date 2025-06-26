import { faker } from "@faker-js/faker";

export const newProduct = () => {
  const data = {
    name:
      faker.commerce.productAdjective() + " " + faker.commerce.productName(),
    price: faker.commerce.price({ dec: 0 }),
    description: faker.lorem.paragraph(),
    quantity: faker.number.int({ max: 100 }),
  };

  return data;
};

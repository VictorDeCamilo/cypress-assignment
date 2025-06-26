import { faker } from "@faker-js/faker";

export const validCommonUser = () => {
  const data = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12, memorable: false }),
    administrator: "false",
  };

  return data;
};

export const validAdminUser = () => {
  const data = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12, memorable: false }),
    administrator: "true",
  };

  return data;
};

export const validRandomUser = () => {
  const data = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12, memorable: false }),
    administrator: faker.datatype.boolean().toString(),
  };

  return data;
};

const faker = require('faker');

const genRandom = (max) => {
  return Math.floor(Math.random() * max);
};

const genPastDate = () => {
  const dateObj = new Date(faker.date.past());
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return `${month} ${day}, ${year}`;
};

const authors = [];
for (let i = 0; i < 20; i++) {
  authors.push(`${faker.name.firstName()} ${faker.name.lastName()}`);
}

const publishers = [];
for (let i = 0; i < 10; i++) {
  publishers.push(faker.company.companyName());
}

const createBookName = () => {
  const nameType = genRandom(4);
  switch (nameType) {
    case 0:
      return `The ${faker.commerce.productAdjective()} ${faker.commerce.product()}`;
    case 1:
      return `${faker.commerce.product()} is the Next ${faker.commerce.productAdjective()}`;
    case 2:
      return `101 ways to ${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}`;
    case 3:
      return `${faker.database.engine()}: From Pupa to Butterfly`;
  }
};

const createFakeBook = () => {
  return {
    author_name: authors[genRandom(authors.length)],
    book_name: createBookName(),
    publisher: publishers[genRandom(publishers.length)],
    publication_date: genPastDate(),
    number_of_pages: faker.random.number(400) + 100
  };
};

exports.seed = async function (knex) {
  const fakeBooks = [];
  const desiredFakeBooks = 500;
  for (let i = 0; i < desiredFakeBooks; i++) {
    fakeBooks.push(createFakeBook());
  }
  await knex('books').insert(fakeBooks);
};

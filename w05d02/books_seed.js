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
for (let i = 0; i < 5; i++) {
  authors.push(`${faker.name.firstName()} ${faker.name.lastName()}`);
}

const publishers = [];
for (let i = 0; i < 5; i++) {
  publishers.push(faker.company.companyName());
}

const createFakeBook = () => {
  const bookName = `The ${faker.commerce.productAdjective()} ${faker.commerce.product()}`;

  return {
    author_name: authors[genRandom(authors.length)],
    book_name: bookName,
    publisher: publishers[genRandom(publishers.length)],
    publication_date: genPastDate(),
    number_of_pages: faker.random.number(400) + 100
  };
};

exports.seed = async function(knex) {
  const fakeBooks = [];
  const desiredFakeBooks = 50;
  for (let i = 0; i < desiredFakeBooks; i++) {
    fakeBooks.push(createFakeBook());
  }
  await knex('books').insert(fakeBooks);
};

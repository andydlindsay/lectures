## Seeding the Database

* Run `knex seed:run` to use the files in the `seeds` directory
* You can pass an argument to specify how many seeds to create

```sh
# pass the argument "10000" to seed command
knex seed:run 10000
```

## Cleaning the Database

* Run `node cleaner.js` or `npm run cleaner` to clean the db

## Clean and Seed

* Run `node cleaner.js && knex seed:run`
* Or using the alias: `npm run all`

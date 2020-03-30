# W5D2 - Database Design

### To Do
- [ ] Primary Keys/Foreign Keys
- [ ] Data Types
- [ ] Relationship Types
- [ ] Naming Conventions
- [ ] Normalization
- [ ] Design Concepts
- [ ] Entity Relationship Diagrams
- [ ] ERD #1: Convert 2 Spreadsheets
- [ ] ERD #2: Student Suggestion

### Primary Key

- A way of uniquely identifying a particular record within a table 
- Must be unique (within the table) and can never be null
- The usual data type is auto-incrementing integer (`INTEGER` or `BIGINT`)
- A Primary Key stored in another table is known as a `Foreign Key`
- The Primary Key and Foreign Key **MUST** be the same data type

### Data Types

- Each field in a table **must** have a data type defined for it
- The data type tells the database how much room to set aside to store the value _and_ allows the database to perform type validation on data before insertion (to protect the data integrity of the table)
- Choosing the perfect data type is less of a concern nowadays because memory is now comparably cheap

### Relationship Types

- **One-to-One**: One record in the first table is related to one (and only one) record in the second table
- **One-to-Many**: One record in the first table is related to one or more records in the second table
- **Many-to-Many**: One or more records in the first table are related to one or more records in the second table

- It could be argued that there is really only one relationship type: _One-to-Many_ as One-to-One's are extremely rare and Many-to-Many's are implemented using two _One-to-Many's_

### Naming Conventions

- Table and field names are written in `snake_case`
- Table names are always pluralized
- The primary key for each table will simply be called `id`
- A foreign key is made up of the singular of the primary keys table and the suffix `_id` (eg. `user_id` is the foreign key for the `id` field in the `users` table)

### Normalization

- The process of designing (and redesigning) a relational database to reduce duplicated data
- This will help to improve the structure of the data
- Beware: taking this process too far can result in extremely complex queries to retrieve related data

### Design Concepts

- Make fields required based on the records state upon initial creation (remember that additional data can be added to a record after it has been created)
- Intelligent default values can be set for fields (such as the current timestamp for a `created_on` field)
- Don't use calculated fields (a field that can be derived from one or more other fields, such as `full_name` is a combination of `first_name` and `last_name`)
- Pull repeated values out to their own table and make reference to them with a foreign key
- Try not to delete anything (use a boolean flag instead to mark a record as active or inactive)
- Consider using a `type` field instead of using two (or more) tables to store very similar data (eg. create an `orders` table with an `order_type` field instead of a `purchase_orders` and a `sales_orders` table)

### Entity Relationship Diagram (ERD)

- A visual depiction of the database tables and how they are related to each other
- Extremely useful for reasoning about how the database should be structured
- Can be created using pen and paper, a whiteboard, or using an online application

### ERD #1 Convert 2 Spreadsheets
We started with these two spreadsheets:

![Two Spreadsheets](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/bookAndAuthorsTables.png)

And turned them into a relational db:

![Books and Authors](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/books+and+authors.png)

### ERD #2 Uber/Ride Hailing
Then we created an ERD for a fictional Uber competitor:

![Uber](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/uber.png)

### Useful Links
* [Database Normalization](https://en.wikipedia.org/wiki/Database_normalization)
* [Postgres Data Types](http://www.postgresqltutorial.com/postgresql-data-types/)
* [Relationship Types](http://etutorials.org/SQL/Database+design+for+mere+mortals/Part+II+The+Design+Process/Chapter+10.+Table+Relationships/Types+of+Relationships/)
* [draw.io (online ERD)](https://www.draw.io/)

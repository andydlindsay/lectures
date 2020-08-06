const routeGenerator = (resourceName, useAlternateMethods = false) => {
  if (useAlternateMethods) {
    console.log(`Browse\tGET\t/${resourceName}`);
    console.log(`Read\tGET\t/${resourceName}/:id`);
    console.log(`Edit\tPATCH\t/${resourceName}/:id`);
    console.log(`Add\tPOST\t/${resourceName}`);
    console.log(`Delete\tDELETE\t/${resourceName}/:id`);
  } else {
    console.log(`Browse\tGET\t/${resourceName}`);
    console.log(`Read\tGET\t/${resourceName}/:id`);
    console.log(`Edit\tPOST\t/${resourceName}/:id`);
    console.log(`Add\tPOST\t/${resourceName}`);
    console.log(`Delete\tPOST\t/${resourceName}/:id/delete`);
  }
};

routeGenerator('dinosaurs');
console.log();
routeGenerator('dinosaurs', true);
// console.log();
// routeGenerator('cats');
// console.log();
// routeGenerator('strawberries');

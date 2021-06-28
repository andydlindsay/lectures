## Final `index.ejs`

```html
<body>
  <h1>Welcome to our site!</h1>

  <h2>Create a new Product!</h2>
  <form id="new-product">
    <label for="product-name">Product Name:</label>
    <input name="productName" id="product-name" />
    <br/>

    <label for="price">Price:</label>
    <input name="price" id="price" />
    <br/>

    <button type="submit">Create!</button>
  </form>

  <h2>All the products!</h2>
  <div id="products"></div>
</body>
```

## Final `script.js`

```js
const loadProducts = () => {
  $.get('/api/products')
    .then((products) => {
      renderProducts(products.reverse());
    });
};

const renderProducts = (products) => {
  const $productContainer = $('#products');
  $productContainer.empty();

  for (const product of products) {
    $productContainer.append(createProduct(product));
  }
};

const createProduct = (product) => {
  const $product = $(`
    <div class="product">
      <h2>Product Name: ${product.product_name}</h2>
      <h3>Price: $${product.price}</h3>
    </div>
  `);

  const $editForm = $(`
    <form>
      <label for="product-name">Product Name:</label>
      <input name="productName" id="product-name" value="${product.product_name}" />
      <br/>

      <label for="price">Price:</label>
      <input name="price" id="price" value="${product.price}" />
      <br/>

      <button type="submit">Update!</button>
    </form>
  `);

  $editForm.submit(function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.post(`/api/products/${product.id}`, data)
      .then(() => {
        loadProducts();
      });
  });

  const $deleteButton = $('<button>Delete</button>')
    .click(() => {
      $.post(`/api/products/${product.id}/delete`)
        .then(() => {
          loadProducts();
        });
    });

  $product.append($editForm, $deleteButton);

  return $product;
};

$(() => {
  loadProducts();

  const $newProductForm = $('#new-product');

  $newProductForm.submit(function (event) {
    event.preventDefault();
    const data = $(this).serialize();

    $.post('/api/products', data)
      .then(() => {
        loadProducts();
        $newProductForm[0].reset();
      });
  });
});
```

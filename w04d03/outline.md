# Outline

### AJAX
* **A**synchronous **J**avaScript **A**nd **X**ML
* Invented by Microsoft for Outlook Web Access as a way of replicating desktop application functionality in the browser
* Thanks to AJAX, web applications can send and receive data asynchronously without requiring a browser refresh
* The widespread use of AJAX was one of the factors that led to Web 2.0
* Originally retrieved data sent using `XML`, but modern applications use `JSON` instead

### XMLHttpRequest Object
* AJAX is implemented using the `XMLHttpRequest` (`XHR`) object
* Modern libraries (such as `jQuery` or `axios`) provide us with easy-to-use wrappers for the `XHR` object
* [W3Schools Example](https://www.w3schools.com/xml/xml_http.asp)

### jQuery AJAX
* jQuery gives us an API for making AJAX requests

```js
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET',
  dataType: 'json',
  success: (data) => {
    console.log('this request succeeded and here\'s the data', data);
  },
  error: (error) => {
    console.log('this request failed and this was the error', error);
  }
});
```

### Run through the starter app code
* The `foods` are being required in from a JSON file (students might not have seen this before)

### Introduce static files and `express.static`
* Discuss static files (contrast with ejs templates which are dynamic)
* Add `express.static` middleware to the starter app
* Add a `public` folder and an `index.html`
* Demo that `index.html` will be served when visiting `/` (and only `/`)

```js
app.use(express.static('public')); // serve up static files from a folder named "public"
```

### Add jQuery and demo making an AJAX request
* Make a request to an external API
* Make a request to the `/food-items` endpoint

```js
// /public/ajax-demo.js
$.ajax({
  method: 'GET',
  url: 'https://www.dnd5eapi.co/api/monsters/adult-black-dragon/',
  success: (response) => {
    console.log('inside callback', response);
  }
});

$.ajax({
  method: 'GET',
  url: '/food-items',
}).done((response) => {
  console.log('inside promise', response);
});
```

### Build and style a hardcoded food element in `index.html`
* Add the structure to `index.html`
* Add a stylesheet and styles

```html
<!-- inside /public/index.html -->
<article class="food-item">
  <div class="food-item-header">
    <h2>Name: Hawaiian Pizza</h2>
    <p>ID: ghi</p>
  </div>
  <hr/>
  <p>Tagline: The perfect food</p>
  <div class="food-item-footer">
    <h4>Price: $4.99</h4>
    <h4>Calories: 600</h4>
  </div>
</article>
```

```css
/* inside /public/food-item.css */
.food-item {
  border: 2px solid magenta;
  border-radius: 15px;
  padding: 0 20px;
  margin-bottom: 10px;
}

.food-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: olivedrab;
}

.food-item-footer {
  display: flex;
  justify-content: space-between;
  color: lightseagreen;
}
```

### Re-create the hardcoded food item element using jQuery
* Add a wrapper `<section>` with an id so we can grab it with jQuery
* Append/prepend our new element to the DOM
* The style/markup for the created element should be identical to the hardcoded element
* This is a good opportunity to demonstrate when JS runs by running our code outside and then inside a `document.ready` function (the query for the `#food-item-container` will fail if the JS runs too early)

```js
// inside /public/food-item.js
const $foodItem = $(`
  <article class="food-item">
    <div class="food-item-header">
      <h2>Name: Hawaiian Pizza</h2>
      <p>ID: ghi</p>
    </div>
    <hr/>
    <p>Tagline: The perfect food</p>
    <div class="food-item-footer">
      <h4>Price: $4.99</h4>
      <h4>Calories: 600</h4>
    </div>
  </article>
`);

const $container = $('#food-item-container');

$container.prepend($foodItem); // or .append
// or
$foodItem.prependTo($container); // or .appendTo
```

```html
<!-- inside /public/index.html -->
<section id="food-item-container">

  <article class="food-item">
    <div class="food-item-header">
      <h2>Name: Hawaiian Pizza</h2>
      <p>ID: ghi</p>
    </div>
    <hr/>
    <p>Tagline: The perfect food</p>
    <div class="food-item-footer">
      <h4>Price: $4.99</h4>
      <h4>Calories: 600</h4>
    </div>
  </article>

</section>
```

### Move the dynamic creation into a helper function that accepts a `foodItem` object

```js
// inside /public/food-item.js
const $container = $("#food-item-container");

const foodItem = {
  id: 'abc',
  name: 'Tasty Food Treat',
  price: 9.99,
  tagline: 'Always a great snack!',
  calories: 400
};

const createFoodItem = (foodItem) => {
  const $foodItem = $(`
    <article class="food-item">
      <div class="food-item-header">
        <h2>Name: ${foodItem.name}</h2>
        <p>ID: ${foodItem.id}</p>
      </div>
      <hr/>
      <p>Tagline: ${foodItem.tagline}</p>
      <div class="food-item-footer">
        <h4>Price: $${foodItem.price}</h4>
        <h4>Calories: ${foodItem.calories}</h4>
      </div>
    </article>
  `);

  return $foodItem;
};

const $foodItem = createFoodItem(foodItem);

$container.prepend($foodItem); // or .append
```

### Create a helper function to render an array of foodItems
* The hardcoded food item in `index.html` can be deleted so that the `<section>` is empty to start

```html
<!-- inside /public/index.html -->
<section id="food-item-container"></section>
```

```js
// inside /public/food-item.js
const foodItems = [
  {
    id: 'abc',
    name: 'Tasty Food Treat',
    price: 9.99,
    tagline: 'Always a great snack!',
    calories: 400
  },
  {
    id: 'def',
    name: 'Another Awesome Item',
    price: 3.99,
    tagline: 'Tasty any time of day.',
    calories: 200
  },
  {
    id: 'ghi',
    name: 'Great Food',
    price: 7.49,
    tagline: 'Mmmmmmmmmm',
    calories: 750
  },
];

const renderFoodItems = (foodItems) => {
  for (const foodItem of foodItems) {
    const $foodItem = createFoodItem(foodItem);
    $container.prepend($foodItem); // or .append
  }
};

renderFoodItems(foodItems);
```

### Create a helper function to make a `GET` request to `/foods`
* The hardcoded `foodItems` array can be deleted/commented out

```js
// inside /public/food-item.js
const fetchFoods = () => {
  $.ajax({
    method: 'GET',
    url: '/food-items'
  }).then((foodItems) => {
    renderFoodItems(foodItems);
  });
};

fetchFoods();
```

### Add a form to `index.html` for food item creation

```html
<!-- inside /public/index.html -->
<form id="food-item-form">
  <label>Name</label>
  <input name="name" />
  <br/>
  <label>Tagline</label>
  <input name="tagline" />
  <br/>
  <label>Price</label>
  <input name="price" />
  <br/>
  <label>Calories</label>
  <input name="calories" />
  <br/>
  <button type="submit">Create!</button>
</form>
```

### Add a submit handler for the form
* This is a good time to demonstrate/talk about the default behaviour of HTML forms
* Call `fetchFoodItems` when the POST request resolves

```js
// inside /public/food-item.js
const $form = $('#food-item-form');

$form.on('submit', (event) => {
  event.preventDefault();
  
  const data = $form.serialize();

  $.ajax({
    method: 'POST',
    url: '/food-items',
    data: data
  }).then(() => {
    fetchFoodItems();
  });
});
```

### Empty the food item container before it gets refilled

```js
// inside /public/food-item.js
const renderFoodItems = (foodItems) => {
  $container.empty();
  
  for (const foodItem of foodItems) {
    const $foodItem = createFoodItem(foodItem);
    $container.prepend($foodItem); // or .append
  }
};
```

### Final Files

```html
<!-- /public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="food-item.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.js" integrity="sha512-6DC1eE3AWg1bgitkoaRM1lhY98PxbMIbhgYCGV107aZlyzzvaWCW1nJW2vDuYQm06hXrW0As6OGKcIaAVWnHJw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="food-item.js"></script>

    <title>Food App</title>
  </head>
  <body>
    <h1>Food App!</h1>

    <form id="food-item-form">
      <label>Name</label>
      <input name="name" />
      <br/>
      <label>Tagline</label>
      <input name="tagline" />
      <br/>
      <label>Price</label>
      <input name="price" />
      <br/>
      <label>Calories</label>
      <input name="calories" />
      <br/>
      <button type="submit">Create!</button>
    </form>

    <section id="food-item-container"></section>
  </body>
</html>
```

```css
/* /public/food-item.css */
.food-item {
  border: 2px solid magenta;
  border-radius: 15px;
  padding: 0 20px;
  margin-bottom: 10px;
}

.food-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: olivedrab;
}

.food-item-footer {
  display: flex;
  justify-content: space-between;
  color: lightseagreen;
}
```

```js
// /public/food-item.js
$(document).ready(() => {
  const $container = $("#food-item-container");

  const createFoodItem = (foodItem) => {
    const $foodItem = $(`
      <article class="food-item">
        <div class="food-item-header">
          <h2>Name: ${foodItem.name}</h2>
          <p>ID: ${foodItem.id}</p>
        </div>
        <hr/>
        <p>Tagline: ${foodItem.tagline}</p>
        <div class="food-item-footer">
          <h4>Price: $${foodItem.price}</h4>
          <h4>Calories: ${foodItem.calories}</h4>
        </div>
      </article>
    `);

    return $foodItem;
  };

  const renderFoodItems = (foodItems) => {
    $container.empty();
    
    for (const foodItem of foodItems) {
      const $foodItem = createFoodItem(foodItem);
      $container.prepend($foodItem); // or .append
    }
  };

  const fetchFoodItems = () => {
    $.ajax({
      method: 'GET',
      url: '/food-items'
    }).then((foodItems) => {
      renderFoodItems(foodItems);
    });
  };

  fetchFoodItems();

  const $form = $('#food-item-form');

  $form.on('submit', (event) => {
    event.preventDefault();
    
    const data = $form.serialize();

    $.ajax({
      method: 'POST',
      url: '/food-items',
      data: data
    }).then(() => {
      fetchFoodItems();
    });
  });
});
```

console.log("hello world");

$(document).ready(() => {
  // inside /public/food-item.js
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

# Outline

### Create a new app

```sh
npx create-react-app pizza-place
```

### Remove boilerplate and create `components` directory

### 


```js
const genRandomId = () => {
  return Math.random()
    .toString(36)
    .substring(2, 6);
};
```

pizza
  - crust
    - type (thick, thin, pan)
    - isStuffed (boolean)
    - size (small, medium, large)
    - isGlutenFree (boolean)
  - toppings[]

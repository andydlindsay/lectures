import Product from "./components/Product";

import "./App.css";

function App() {
  const product = {
    name: "Peanuts",
    price: 2.49,
  };

  const arrayOfProducts = [
    <Product key="1" name="Taco Kit" price={6.99} />,
    <Product key="2" {...product} />,
  ];

  return (
    <div className="App">
      { arrayOfProducts }
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/product.json')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <Provider store={store}>
      <div>
        <h1>Shopping Cart</h1>
        <ProductList products={products} />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;

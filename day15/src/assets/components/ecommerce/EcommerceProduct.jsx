import { useState } from 'react';


const productsData = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 160 },
  { id: 2, name: 'Carrot', category: 'Vegetables', price: 150 },
  { id: 3, name: 'Milk', category: 'Dairy', price: 50 },
  { id: 4, name: 'Cheese', category: 'Dairy', price: 220 },
  { id: 5, name: 'Banana', category: 'Fruits', price: 80 }
];


function Ecommerce() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(500);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (indexToRemove) => {
  setCart(cart.filter((_, index) => index !== indexToRemove));
};

  const filteredProducts = productsData.filter(
    (product) =>
      (category === 'All' || product.category === category) &&
      product.price <= maxPrice
  );

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="ecom-app">
      <h1>🛒 Ecommerce Product List</h1>

      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="All">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
        </select>

        <input
          type="range"
          min="1"
          max="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <span>Max Price: ₹{maxPrice}</span>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
           <p>Price: ₹{product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h2>🧺 Cart Items</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
  <li key={index}>
  {item.name} - ₹{item.price.toFixed(2)}
  <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
</li>
))}
            </ul>
            <p><strong>Total: ₹{total.toFixed(2)}</strong></p>
          </>
        )}
      </div>
    </div>
  );
}

export default Ecommerce;

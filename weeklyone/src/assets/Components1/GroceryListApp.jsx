import React, { useState } from 'react';


const GroceryApp = () => {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('Fruits');
  const [groceryList, setGroceryList] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');

 const handleAddItem = () => {
  const trimmedItem = item.trim();
  if (trimmedItem === '') return;

  const newItem = {
    id: Date.now(),
    name: trimmedItem,
    category: category,
  };

  setGroceryList([...groceryList, newItem]);
  setItem('');
  setFilterCategory('all'); 
};

  const handleClearList = () => {
    setGroceryList([]);
  };

  const handleDeleteItem = (id) => {
    const updatedList = groceryList.filter(item => item.id !== id);
    setGroceryList(updatedList);
  };

  const handleShowAll = () => {
    setFilterCategory('all');
  };

  const handleShowSelectedCategory = () => {
    setFilterCategory(category);
  };

  const filteredList =
    filterCategory === 'all'
      ? groceryList
      : groceryList.filter((item) => item.category === filterCategory);

  return (
    <>
    <div className="container">
      <h2 className="app-title">Grocery List App</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter grocery item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select"
        >
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Beverages">Beverages</option>
        </select>

        <div className="button-group">
          <button onClick={handleAddItem} className="button">Add</button>
          <button onClick={handleClearList} className="button clear-button">Clear All</button>
          <button onClick={handleShowAll} className="button info-button">Show All</button>
          <button onClick={handleShowSelectedCategory} className="button filter-button">
            Show "{category}"
          </button>
        </div>
      </div>

      {filteredList.length === 0 ? (
        <p className="empty-text">No items to display.</p>
      ) : (
        <ul className="list">
          {filteredList.map((grocery) => (
            <li key={grocery.id} className="list-item">
              <div className="item-content">
                <span>
                  <strong>{grocery.name}</strong>{' '}
                  <span className="category">({grocery.category})</span>
                </span>
                <button className="delete-button" onClick={() => handleDeleteItem(grocery.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
    
  );
};

export default GroceryApp;
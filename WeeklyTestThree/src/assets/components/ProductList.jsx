import { useState,useEffect } from "react";

const ProductList=()=>{

    const[products,setProducts]=useState([]);
const[filteredproducts,setFilteredproducts]=useState([]);
const[searchterm,setSearchterm]=useState("");
const[selectedcategory,setSelectedcategory]=useState('All');
const[sortorder,setSortorder]=useState("default");
const[modalproduct,setModalproduct]=useState(null);

 const usdToInr = (usd) => (usd * 83.2).toFixed(0);

 
useEffect(()=>{

    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        setProducts(data);
        setFilteredproducts(data);

    })
.catch ((error)=>
    console.error("error fetching prodcuts:", error))



},[])


useEffect(()=>{

    let updated = [...products];

    if(selectedcategory!=="all"){

        updated = updated.filter((product)=>product.category === selectedcategory)

    }

    if(searchterm)
    {
        const LowerTerm = searchterm.toLowerCase();
        updated = updated.filter((product)=>
        product.title.toLowerCase().includes(LowerTerm)|| 
    product.description.toLowerCase().includes(LowerTerm)
);
    }

if(sortorder=== "low"){
    updated.sort((a,b)=>a.price- b.price)

}
else if
(sortorder==="high"){
      updated.sort((a,b)=>b.price- a.price)
}

setFilteredproducts(updated);  
},[searchterm,selectedcategory,sortorder,products]);

const categories = ["all", ...new Set(products.map((p) => p.category))];

return(
    <>
    <div className="product-container">
         <h1 className="product-h1">🛍️ 15. Product Listing</h1><div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        />

        <select value={selectedcategory} onChange={(e) => setSelectedcategory(e.target.value)}>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <select value={sortorder} onChange={(e) => setSortorder(e.target.value)}>
          <option value="default">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredproducts.map((product) => (
          <div className="product-card" key={product.id} onClick={() => setModalproduct(product)}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p className="price">₹{usdToInr(product.price)}</p>
            <p className="description">{product.description.substring(0, 100)}...</p>
          </div>
        ))}
      </div>

      {modalproduct && (
        <div className="modal-overlay" onClick={() => setModalproduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={modalproduct.image} alt={modalproduct.title} />
            <h2>{modalproduct.title}</h2>
            <p className="price">₹{usdToInr(modalproduct.price)}</p>
            <p>{modalproduct.description}</p>
            <p><strong>Category:</strong> {modalproduct.category}</p>
            <button onClick={() => setModalproduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
    
    </>
)

}

export default ProductList;
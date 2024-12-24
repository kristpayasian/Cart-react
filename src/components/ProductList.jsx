import React, { useState } from "react";

function ProductList({ products, onAddToCart, onRemoveFromCart }) {
  const [itemCounts, setItemCounts] = useState({});
  console.log(itemCounts);
  const handleAdd = (product) => {
    const newCount = (itemCounts[product.name] || 0) + 1;
    setItemCounts({ ...itemCounts, [product.name]: newCount });
    onAddToCart(product);
  };

  const handleRemove = (product) => {
    const currentCount = itemCounts[product.name] || 0;
    if (currentCount > 0) {
      const newCount = currentCount - 1;
      setItemCounts({ ...itemCounts, [product.name]: newCount });
      onRemoveFromCart(product);
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => {
        const count = itemCounts[product.name] || 0;

        return (
          <div className="product-container" key={product.name}>
            <div className="product-card">
              <img src={product.image} alt={product.alt} />
            </div>
            {count > 0 ? <div 
              className={`add-to-cart active`}>
                <div style={{ display: "flex", alignItems: "center" , fontSize: "18px"}}>
                  <button>
                   <img
                    src="/assets/images/icon-increment-quantity.svg"
                    alt="Add"
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleAdd(product);
                    }}
                    style={{
                      cursor: "pointer",
                      width: "16px",
                      height: "16px",
                      marginRight: "21px",
                    }}
                    
                  />
                  </button>
                  {count}
                  <button>
                  <img
                    src="/assets/images/icon-decrement-quantity.svg"
                    alt="Remove"
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleRemove(product);
                    }}
                    style={{
                      cursor: "pointer",
                      width: "16px",
                      height: "16px",
                      marginLeft: "25px",
                    }}
                  />
                  </button>
                </div>
            </div> :
            
            <div className="add-to-cart" onClick={() => handleAdd(product)}>
              <img
                    src="/assets/images/icon-add-to-cart.svg"
                    alt="Add to Cart"
                  />
                  Add to cart
            </div>
            }
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <h6>${product.price.toFixed(2)}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;

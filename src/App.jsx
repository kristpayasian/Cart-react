import React, { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import "./App.css";

const products = [
  {
    image: "/assets/images/image-waffle-desktop.jpg",
    alt: "Waffle",
    category: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
  },
  {
    image: "/assets/images/image-creme-brulee-desktop.jpg",
    alt: "Creme Brulee",
    category: "Creme Brulee",
    name: "Vanilla Bean Creme Brulee",
    price: 7.0,
  },
  {
    image: "/assets/images/image-macaron-desktop.jpg",
    alt: "Macaron",
    category: "Macaron",
    name: "Macaron Mix of Five",
    price: 8.0,
  },
  {
    image: "/assets/images/image-tiramisu-desktop.jpg",
    alt: "Tiramisu",
    category: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
  },
  {
    image: "/assets/images/image-baklava-desktop.jpg",
    alt: "Baklava",
    category: "Baklava",
    name: "Pistachio Baklava",
    price: 4.0,
  },
  {
    image: "/assets/images/image-meringue-desktop.jpg",
    alt: "Pie",
    category: "Pie",
    name: "Lemon Meringue Pie",
    price: 5.0,
  },
  {
    image: "/assets/images/image-cake-desktop.jpg",
    alt: "Cake",
    category: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
  },
  {
    image: "/assets/images/image-brownie-desktop.jpg",
    alt: "Brownie",
    category: "Brownie",
    name: "Salted Caramel Brownie",
    price: 5.5,
  },
  {
    image: "/assets/images/image-panna-cotta-desktop.jpg",
    alt: "Panna Cotta",
    category: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
  },
];

function App() {
  const [cart, setCart] = useState({});

  const handleAddToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.name]: (prevCart[product.name] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[product.name] > 1) {
        updatedCart[product.name] -= 1;
      } else {
        delete updatedCart[product.name];
      }
      return updatedCart;
    });
  };

  const handleDeleteItem = (productName) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productName];
      return updatedCart;
    });
  };

  return (
    <div className="container">
      <div className="container1">
        <h2>Desserts</h2>
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>
      <div className="container2">
        <Cart
          cart={cart}
          products={products}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
  );
}

export default App;

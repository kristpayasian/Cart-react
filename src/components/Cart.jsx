import React, { useState } from "react";
import "./Cart.css";

function Cart({ cart, products, onAddToCart, onRemoveFromCart, onDeleteItem }) {
  const [showModal, setShowModal] = useState(false);

  const cartItems = Object.entries(cart);
  const totalPrice = cartItems.reduce(
    (total, [name, count]) => {
      const product = products.find((p) => p.name === name);
      return total + count * product.price;
    },
    0
  );

  const handleConfirmOrder = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <div className="container2">
    <div className="product-cart">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <div>
          <img src="/assets/images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(([name, count]) => {
              const product = products.find((p) => p.name === name);
              return (
                <div className="cart-item" key={name}>
                  <div>
                    <div className="item-name">{name}</div>
                    <div className="item-details">
                    <p> {count}x </p> @${product.price.toFixed(2)} ${ (count * product.price).toFixed(2) }
                    </div>
                  </div>
                  <span>
                    <button
                      className="delete-btn"
                      onClick={() => onDeleteItem(name)}
                    >
                      <img
                        src="assets/images/icon-remove-item.svg"
                        alt="Remove"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </button>
                  </span>
                </div>
              );
            })}
          </ul>
          <div className="total-price">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>

          <div className="Carbon">
            <p>
              <img
                src="/assets/images/icon-carbon-neutral.svg"
                alt=""
              />
              This is a carbon-neutral delivery
            </p>
            <button onClick={handleConfirmOrder}>Confirm Order</button>
          </div>
        </>
      )}
</div>
      {showModal && (
  <div className="modal-overlay">
          <div className="modal-content">
            <img src="/assets/images/icon-order-confirmed.svg" alt="" style={{width: "50px",height: "50px",marginBottom: "10px", transform: "translateX(-4px)"}}/>
            <h2>Order Confirmed</h2>
            <p style={{padding: "0px",fontSize: "13px",display: "flex",margin: "0px",color: "rgb(85, 85, 85)"}}>We hope you enjoy your food!</p>
            <ul>
              {cartItems.map(([name, count]) => {
                const product = products.find((p) => p.name === name);
                return (
                  <li key={name}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <div style={{ display: "flex" }}>
      <img
        src={product.image}
        alt={name}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "5px",
          marginRight: "10px",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{name}</span>
        <small style={{ color: "gray" }}>
          <p
            style={{
              color: "hsl(14, 86%, 42%)",
              display: "inline",
              paddingRight: "1rem",
              fontSize: "15px",
            }}
          >
            {count}x{" "}
          </p>
          @${product.price.toFixed(2)}
        </small>
      </div>
    </div>
    
    <div style={{ fontWeight: "bold" }}>
      ${ (count * product.price).toFixed(2) }
    </div>
  </div>
</li>

                  
                );
              })}
            </ul>
            <div className="total-price-modal">
              <p>Total: </p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <button onClick={closeModal}>Start New Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

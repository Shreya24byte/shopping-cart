import { Products } from "./Products";
import React from "react";
export function Checkout({ cartItems, updateCartItems }) {
  const removeFromCart = (productToRemove) => {
    updateCartItems(cartItems.filter((product) => product !== productToRemove));
  };
  return (
    <>
      <h2 className="my-4">Items you have ordered:</h2>
      <div className="products">
        {cartItems.map((product, index) => (
          <div className="card w-80 mt-2 mx-4">
            <div className="card-body">
              <div className="checkout-box container">
                <div className="row" key={index}>
                  <div className="col-3"></div>
                  <div className="col-7">
                    <h4>{product.name}</h4>
                    <p>{product.info}</p>
                    <h5>Price:{product.price}</h5>
                  </div>
                  <div className="col-2 pt-5">
                    <button
                      className="btn btn-danger my-auto"
                      onClick={() => removeFromCart(product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

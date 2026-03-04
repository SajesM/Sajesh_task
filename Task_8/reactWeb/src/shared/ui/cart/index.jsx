import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./styles.css";

function Cart({ open, setOpen }) {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`cart-sidebar ${open ? "open" : ""}`}>
      <div className="cart-top">
        <h3>Cart</h3>
        <button onClick={() => setOpen(false)}>X</button>
      </div>

      {cart.length === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.title}</span>
              <div>
                <span className="price">${item.price}</span>
                <button
                  className="remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <strong>Total: ${total}</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
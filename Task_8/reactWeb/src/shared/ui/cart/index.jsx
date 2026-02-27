import './styles.css';

function Cart({ open, setOpen }) {
  return (
    <div className={`cart-sidebar ${open ? 'open' : ''}`}>
      <button className="close" onClick={() => setOpen(false)}>X</button>
      <h2>Cart</h2>
      <p>Your cart is empty</p>
    </div>
  );
}

export default Cart;
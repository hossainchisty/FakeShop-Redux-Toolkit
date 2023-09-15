import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ productId, newQuantity }));
    } else {
      alert("Please enter a value greater than or equal to 1");
    }
  };

  const cart = useSelector((state) => state.cart);
  const cartItems = cart.items || [];

  const total = cartItems.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  return (
    <div>
      <div className="cartWrapper heading">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <h2>Your Cart is Empty!</h2>
            <img src="https://www.rokomari.com/static/200/images/icon_empty_cart.png" />
            <p>Looks like you haven{"'"}t made order yet.</p>

            <Link to="/">Continue to Shopping</Link>
          </div>
        ) : (
          cartItems.map((product) => (
            <div key={product.id} className="cartCard">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h5>${product.price}</h5>
              <div className="quantity-control">
                <button
                  className="quantity-button"
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity - 1)
                  }
                >
                  -
                </button>
                <h5>{product.quantity}</h5>
                <button
                  className="quantity-button"
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div>
            <h4>Total Price: ${total.toFixed(2)}</h4>
            <button className="btn">Place Order</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

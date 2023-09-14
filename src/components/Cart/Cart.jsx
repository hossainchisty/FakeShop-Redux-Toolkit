import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const cart = useSelector((state) => state.cart);
  const cartItems = cart.items || [];

  //  Helper function to calculate the total cost of items in the cart
  const total = cartItems.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);
  return (
    <div>
      <h3 className="heading">Shopping Cart</h3>
      <div className="cartWrapper heading">
        {cartItems.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>${product.price}</h5>
            <h5>{product.quantity}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
        <h4>Total Price: ${total.toFixed(2)}</h4>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;

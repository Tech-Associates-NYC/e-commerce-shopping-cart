import './CartScreen.css'
import CartItem from "../components/CartItem"


import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
const CartScreen = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

    return (
        <div className='cartscreen'>
            <div className="cartscreen_left">
                <h2>Shopping Cart</h2>
                {/* loop through cart */}
                {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
              key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
                
              />
            ))
          )}



            </div>
            <div className="cartscreen_right">
                <div className="cartscreen_info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal()}</p>
                </div>
                <div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen

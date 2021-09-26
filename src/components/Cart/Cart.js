import { useContext } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.amount.toFixed(2)}`;

  const hasItemAmount = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClick}>
          Close
        </button>
        {hasItemAmount && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

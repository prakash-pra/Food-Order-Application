import { useContext } from 'react';

import classes from './MealItems.module.css';

import MealItemForm from './MealItemForm';
import cartContext from '../store/cart-context';
// meal items component(mapping in list)
const MealItems = (props) => {
  const cartCtx = useContext(cartContext);
  const price = `$${props.meal.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price
    });
  };

  return (
    <li>
      <div className={classes.meal}>
        <div>
          <h3>{props.meal.name}</h3>
          <div className={classes.description}>{props.meal.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItems;

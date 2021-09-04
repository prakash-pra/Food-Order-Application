import classes from './MealItems.module.css';

import MealItemForm from './MealItemForm';

// meal items component(mapping in list)
const MealItems = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  return (
    <li>
      <div className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItems;

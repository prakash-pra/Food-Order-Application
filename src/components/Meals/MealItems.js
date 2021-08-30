import classes from './MealItems.module.css';

import Input from '../UI/Input';

// meal items component(mapping in list)
const MealItems = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <Input
          label='Amout'
          input={{
            id: 'amout',
            type: 'text',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
          }}
        />
      </div>
    </li>
  );
};

export default MealItems;

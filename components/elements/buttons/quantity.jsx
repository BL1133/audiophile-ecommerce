import classes from './quantity.module.scss';

export default function Quantity(props) {
  return (
    <button onClick={props.handleChange} className={classes.button}>
      <p className={classes.quantity}>-</p>
      <p className={classes.text}>1</p>
      <p className={classes.quantity}>+</p>
    </button>
  );
}

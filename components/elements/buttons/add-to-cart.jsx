import classes from './add-to-cart.module.scss';

export default function AddToCart(props) {
  return (
    <button onClick={props.handleChange} className={classes.button}>
      <p className={classes.text}>ADD TO CART</p>
    </button>
  );
}

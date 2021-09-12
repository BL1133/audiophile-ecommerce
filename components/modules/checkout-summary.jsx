import classes from './checkout-summary.module.scss';
import CartItems from '../modules/cart-items';
import { useContext } from 'react';
import { StateContext } from '../../pages/_app';
import { DispatchContext } from '../../pages/_app';
import numeral from 'numeral';

export default function Summary() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const cartTotal = appState.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 29.95;
  const vat = numeral(cartTotal * 0.1).format('0');
  const grandTotal = numeral(cartTotal + shipping).format('0,000.00');

  function handleChange() {
    appDispatch({ type: 'confirmationToggle' });
    appDispatch({ type: 'grandTotal', value: grandTotal });
  }

  if (cartTotal > 0) {
    return (
      <div className={classes.container}>
        <h6 className={classes.title}>SUMMARY</h6>
        <CartItems summary={true} />
        <div className={classes.cost}>
          <div className={classes.cost__item}>
            <p className={classes.item__title}>TOTAL</p>
            <p className={classes.item__price}>
              $ {numeral(cartTotal).format('0,000')}
            </p>
          </div>
          <div className={classes.cost__item}>
            <p className={classes.item__title}>SHIPPING</p>
            <p className={classes.item__price}>$ {shipping}</p>
          </div>
          <div className={classes.cost__item}>
            <p className={classes.item__title}>VAT (INCLUDED)</p>
            <p className={classes.item__price}>$ {vat}</p>
          </div>
          <div className={classes.cost__item}>
            <p className={classes.item__title}>GRAND TOTAL</p>
            <p className={classes.item__price}>$ {grandTotal}</p>
          </div>
        </div>
        <button onClick={handleChange} className={classes.checkout}>
          <p className={classes.checkout__text}>CONTINUE & PAY</p>
        </button>
      </div>
    );
  } else {
    return (
      <div className={`${classes.container__empty} ${classes.container}`}>
        <h6 className={classes.empty}>Your cart is empty.</h6>
      </div>
    );
  }
}

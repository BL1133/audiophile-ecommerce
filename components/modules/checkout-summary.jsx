import classes from './checkout-summary.module.scss';
import CartItems from '../modules/cart-items';

export default function Summary() {
  return (
    <div className={classes.container}>
      <h6 className={classes.title}>SUMMARY</h6>
      <CartItems summary={true} />
      <div className={classes.cost}>
        <div className={classes.cost__item}>
          <p className={classes.item__title}>TOTAL</p>
          <p className={classes.item__price}>$ 5,396</p>
        </div>
        <div className={classes.cost__item}>
          <p className={classes.item__title}>SHIPPING</p>
          <p className={classes.item__price}>$ 50</p>
        </div>
        <div className={classes.cost__item}>
          <p className={classes.item__title}>VAT (INCLUDED)</p>
          <p className={classes.item__price}>$ 1,079</p>
        </div>
        <div className={classes.cost__item}>
          <p className={classes.item__title}>GRAND TOTAL</p>
          <p className={classes.item__price}>$ 5,446</p>
        </div>
      </div>
      <button className={classes.checkout}>
        <p className={classes.checkout__text}>CONTINUE & PAY</p>
      </button>
    </div>
  );
}

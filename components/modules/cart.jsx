import classes from './cart.module.scss';
import CartItems from './cart-items';
import Link from 'next/link';

export default function Cart() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h6 className={classes.title}>CART (3)</h6>
        <button className={classes.remove_all}>Remove all</button>
      </div>
      <CartItems />
      <div className={classes.total}>
        <p className={classes.total__title}>TOTAL</p>
        <p className={classes.total__cost}>$ 5,396</p>
      </div>
      <div className={classes.link__wrapper}>
        <Link href="/checkout">
          <a className={classes.link}>CHECKOUT</a>
        </Link>
      </div>
    </div>
  );
}

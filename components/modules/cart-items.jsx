import classes from './cart-items.module.scss';
import Image from 'next/image';
import img1 from '../../assets/cart/image-xx99-mark-two-headphones.jpg';
import img2 from '../../assets/cart/image-xx59-headphones.jpg';
import img3 from '../../assets/cart/image-yx1-earphones.jpg';

import Quantity from '../elements/buttons/quantity';

export default function CartItems({ summary }) {
  return (
    <div className={classes.products}>
      <div className={classes.product}>
        <div className={classes.image}>
          <Image src={img1} width={64} height={64} />
        </div>
        <div className={classes.description}>
          <p className={classes.title}>XX99 MK 11</p>
          <p className={classes.price}>$ 2,999</p>
        </div>
        <div className={classes.quantity}>{summary ? 'x1' : <Quantity />}</div>
      </div>
      {/* -------------------------------------------- */}
      <div className={classes.product}>
        <div className={classes.image}>
          <Image src={img2} width={64} height={64} />
        </div>
        <div className={classes.description}>
          <p className={classes.title}>XX99 MK 11</p>
          <p className={classes.price}>$ 2,999</p>
        </div>
        <div className={classes.quantity}>{summary ? 'x2' : <Quantity />}</div>
      </div>
      {/* -------------------------------------------- */}
      <div className={classes.product}>
        <div className={classes.image}>
          <Image src={img3} width={64} height={64} />
        </div>
        <div className={classes.description}>
          <p className={classes.title}>XX99 MK 11</p>
          <p className={classes.price}>$ 2,999</p>
        </div>
        <div className={classes.quantity}>{summary ? 'x1' : <Quantity />}</div>
      </div>
      {/* -------------------------------------------- */}
    </div>
  );
}

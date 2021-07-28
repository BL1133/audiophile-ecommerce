import classes from './product.module.scss';

import ImageLoader from '../../modules/imageLoader';
import AddToCart from '../../elements/buttons/add-to-cart';
import Quantity from '../../elements/buttons/quantity';

import Desktop from '../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import Tablet from '../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg';
import Mobile from '../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';

export default function Product(props) {
  return (
    <div className={`${classes.container} u-margin-b-l`}>
      <div className={`${classes.product__container} u-margin-b-l`}>
        <div className={classes.product__Image}>
          <ImageLoader desktop={Desktop} tablet={Tablet} mobile={Mobile} />
        </div>
        <div className={classes.product}>
          <div className={classes.product__description}>{props.children}</div>
          <p className={classes.price}>{props.price}</p>
          <div className={classes.quantity}>
            <Quantity />
            <AddToCart />
          </div>
        </div>
      </div>
      <div className={classes.features__container}>
        <div className={classes.features}>
          <h3 className={classes.features__title}>FEATURES</h3>
          <div className={classes.features__description}>{props.features}</div>
        </div>
        <div className={classes.included}>
          <h3 className={classes.included__title}>IN THE BOX</h3>
          <ul>
            {props.included.map((item) => {
              return (
                <li className={classes.included__item}>
                  <span className={classes.included__quantity}>
                    {item.quantity}x
                  </span>
                  <span className={classes.included__text}>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

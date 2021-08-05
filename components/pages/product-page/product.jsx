import classes from './product.module.scss';

import ImageLoader from '../../modules/imageLoader';
import AddToCart from '../../elements/buttons/add-to-cart';
import Quantity from '../../elements/buttons/quantity';
import { useContext } from 'react';
import { DispatchContext } from '../../../pages/_app';

export default function Product(props) {
  const appDispatch = useContext(DispatchContext);

  function handleChange() {
    appDispatch({
      type: 'addToCart',
      value: {
        productName: props.productName,
        price: props.price,
        cartImg: props.cartImg,
      },
    });
  }
  return (
    <div className={`${classes.container} u-margin-b-s`}>
      <div className={`${classes.product__container} u-margin-b-m`}>
        <div className={classes.product__image}>
          <ImageLoader
            desktop={props.desktop}
            tablet={props.tablet}
            mobile={props.mobile}
            component="product"
          />
        </div>
        <div className={classes.product}>
          <div className={classes.product__description}>{props.children}</div>
          <p className={classes.price}>{props.price}</p>
          <div className={classes.quantity}>
            <Quantity />
            <AddToCart handleChange={handleChange} />
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
          <ul className={classes.included__list}>
            {props.included.map((item, idx) => {
              return (
                <li key={idx} className={classes.included__item}>
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

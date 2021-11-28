import classes from './product.module.scss';
import { useState } from 'react';
import ImageLoader from '../../modules/imageLoader';
import Image from 'next/image';
import AddToCart from '../../elements/buttons/add-to-cart';
import Quantity from '../../elements/buttons/quantity';
import { useContext } from 'react';
import { DispatchContext } from '../../../pages/_app';

export default function Product({ product, children }) {
  const appDispatch = useContext(DispatchContext);
  const [quantity, setQuantity] = useState(1);

  function handleChange() {
    appDispatch({
      type: 'addToCart',
      value: {
        quantity,
        product,
      },
    });
    setQuantity(1);
  }
  function handleAdd() {
    setQuantity(quantity + 1);
  }
  function handleRemove() {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className={`${classes.container} u-margin-b-s`}>
      <div className={`${classes.product__container} u-margin-b-m`}>
        <div className={classes.product__image}>
          <ImageLoader
            desktop={`/assets/product-${product.slug}-${product.category}/desktop/image-product.jpg`}
            tablet={`/assets/product-${product.slug}-${product.category}/tablet/image-product.jpg`}
            mobile={`/assets/product-${product.slug}-${product.category}/mobile/image-product.jpg`}
            component="product"
          />
        </div>
        <div className={classes.product}>
          <div className={classes.product__description}>{children}</div>
          <p className={classes.price}>${product.price}</p>
          <div className={classes.quantity}>
            <Quantity
              handleRemove={handleRemove}
              handleAdd={handleAdd}
              quantity={quantity}
            />
            <AddToCart handleChange={handleChange} />
          </div>
        </div>
      </div>
      <div className={classes.features__container}>
        <div className={classes.features}>
          <h3 className={classes.features__title}>FEATURES</h3>
          <div className={classes.features__description}>
            {product.features}
          </div>
        </div>
        <div className={classes.included}>
          <h3 className={classes.included__title}>IN THE BOX</h3>
          <ul className={classes.included__list}>
            {product.includes.map((item, idx) => {
              return (
                <li key={idx} className={classes.included__item}>
                  <span className={classes.included__quantity}>
                    {item.quantity}x
                  </span>
                  <span className={classes.included__text}>{item.item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

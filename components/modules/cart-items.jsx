import classes from './cart-items.module.scss';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { StateContext } from '../../pages/_app';
import { DispatchContext } from '../../pages/_app';
import Quantity from '../elements/buttons/quantity';

export default function CartItems({ summary }) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleAdd(e) {
    const productId = e.currentTarget.value;

    appDispatch({
      type: 'addQuantity',
      value: productId,
    });
  }
  function handleRemove(e) {
    const productId = e.currentTarget.value;

    appDispatch({
      type: 'decreaseQuantity',
      value: productId,
    });
  }

  return (
    <div className={classes.products}>
      {appState.cart.map((product, idx) => {
        return (
          <div key={idx} className={classes.product}>
            <div className={classes.image}>
              <Image src={product.img} width={64} height={64} />
            </div>
            <div className={classes.description}>
              <p className={classes.title}>{product.name}</p>
              <p className={classes.price}>$ {product.price}</p>
            </div>
            <div className={classes.quantity}>
              {summary ? (
                `${product.quantity}x`
              ) : (
                <Quantity
                  productId={product.id}
                  handleRemove={handleRemove}
                  handleAdd={handleAdd}
                  quantity={product.quantity}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

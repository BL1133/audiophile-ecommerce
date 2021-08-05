import classes from './cart-items.module.scss';
import Image from 'next/image';
import { useContext } from 'react';
import { StateContext } from '../../pages/_app';
import { DispatchContext } from '../../pages/_app';
import Quantity from '../elements/buttons/quantity';

export default function CartItems({ summary }) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleAdd() {}
  function handleRemove() {}

  return (
    <div className={classes.products}>
      {appState.cart.map((product, idx) => {
        return (
          <div key={idx} className={classes.product}>
            <div className={classes.image}>
              <Image src={product.cartImg} width={64} height={64} />
            </div>
            <div className={classes.description}>
              <p className={classes.title}>{product.productName}</p>
              <p className={classes.price}>{product.price}</p>
            </div>
            <div className={classes.quantity}>
              {summary ? (
                `${product.quantity}x`
              ) : (
                <Quantity handleRemove={handleRemove} handleAdd={handleAdd} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

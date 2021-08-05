import classes from './cart.module.scss';
import CartItems from './cart-items';
import Link from 'next/link';
import { useContext } from 'react';
import ReactModal from 'react-modal';
import { StateContext } from '../../pages/_app';
import { DispatchContext } from '../../pages/_app';

export default function Cart({ isOpen }) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleClose() {
    appDispatch({ type: 'cartToggle' });
  }
  function handleRemoveAll() {
    appDispatch({ type: 'removeAll' });
  }

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={'Cart'}
      // ariaHideApp={true}
      className={'cart-modal'}
      shouldCloseOnEsc={true}
      onRequestClose={handleClose}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '10000' },
      }}
    >
      <div className={classes.container}>
        <div className={classes.header}>
          <h6 className={classes.title}>{`CART (${appState.cart.length})`}</h6>
          <button onClick={handleRemoveAll} className={classes.remove_all}>
            Remove all
          </button>
        </div>
        <CartItems />
        <div className={classes.total}>
          <p className={classes.total__title}>TOTAL</p>
          <p className={classes.total__cost}>{}</p>
        </div>
        <div className={classes.link__wrapper}>
          <Link href="/checkout">
            <a className={classes.link}>CHECKOUT</a>
          </Link>
        </div>
      </div>
    </ReactModal>
  );
}

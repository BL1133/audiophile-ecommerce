import classes from './order-confirmation.module.scss';
import ReactModal from 'react-modal';
import { useContext } from 'react';
import { StateContext } from '../../pages/_app';
import { DispatchContext } from '../../pages/_app';
import Link from 'next/link';
import CartItems from '../modules/cart-items';
export default function OrderConfirmation() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const otherItems = appState.cart.length - 1;

  function handleClose() {
    appDispatch({ type: 'confirmationToggle' });
  }

  return (
    <ReactModal
      isOpen={appState.confirmationOpen}
      // isOpen={true}
      contentLabel={'order-confirmed'}
      ariaHideApp={false}
      className={'orderconfirmation-modal'}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '10000' },
      }}
    >
      <div className={classes.container}>
        <svg
          className={classes.svg}
          width="64px"
          height="64px"
          viewBox="0 0 64 64"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <p>hi</p>
          <g
            id="Designs"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Desktop---Checkout---Modal"
              transform="translate(-498.000000, -270.000000)"
            >
              <g id="Group-20" transform="translate(450.000000, 222.000000)">
                <g id="Group-12" transform="translate(48.000000, 48.000000)">
                  <circle
                    id="Oval"
                    fill="#D87D4A"
                    cx="32"
                    cy="32"
                    r="32"
                  ></circle>
                  <polyline
                    id="Path-4"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    points="20.7539794 33.3328594 27.5054983 40.0843783 43.3085887 24.2812879"
                  ></polyline>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <h3 className={classes.heading}>THANK YOU FOR YOUR ORDER</h3>
        <p className={classes.text}>
          You will receive an email confirmation shortly.
        </p>
        <div className={classes.summaryContainer}>
          <div className={classes.items}>
            <CartItems orderConfirmation={true} />
            {otherItems > 0 && (
              <>
                <span className={classes.line}></span>
                <p className={classes.text}>
                  And {otherItems} other {otherItems > 1 ? 'items' : 'item'}
                </p>
              </>
            )}
          </div>
          <div className={classes.total}>
            <p className={classes.totalHeading}>GRAND TOTAL</p>
            <p className={classes.totalCost}>$ {appState.grandTotal}</p>
          </div>
        </div>
        <button onClick={handleClose} className={classes.button}>
          <Link href="/">
            <a className={classes.link}>BACK TO HOME</a>
          </Link>
        </button>
      </div>
    </ReactModal>
  );
}

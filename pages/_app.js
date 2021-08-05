import Layout from '../components/layout/layout';
import Cart from '../components/modules/cart';
import '../styles/main.scss';

import { useImmerReducer } from 'use-immer';
import React, { createContext } from 'react';

export const StateContext = createContext();
export const DispatchContext = createContext();

function MyApp({ Component, pageProps }) {
  const initialState = {
    cartOpen: false,
    cart: [],
  };

  function Reducer(draft, action) {
    switch (action.type) {
      case 'cartToggle':
        draft.cartOpen = !draft.cartOpen;
        return;
      case 'addToCart':
        const { productName, price, cartImg, quantity } = action.value;
        const arr = Array.from({ length: quantity }, (i) => 1);
        if (quantity === 1) {
          draft.cart.push({
            productName,
            price,
            cartImg,
            quantity,
          });
        } else {
          for (let i = 0; i < arr.length; i++) {
            draft.cart.push({
              productName,
              price,
              cartImg,
              quantity,
            });
          }
        }
        return;
      case 'removeAll':
        draft.cart = [];
      default:
        return draft;
    }
  }
  const [state, dispatch] = useImmerReducer(Reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Cart isOpen={state.cartOpen} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default MyApp;

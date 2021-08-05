import Layout from '../components/layout/layout';
import Cart from '../components/modules/cart';
import '../styles/main.scss';

import { useRouter } from 'next/router';
import { useImmerReducer } from 'use-immer';
import React, { createContext } from 'react';

export const StateContext = createContext();
export const DispatchContext = createContext();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
        const { product, price, cartImg } = action.value;
        draft.cart.push({
          product,
          price,
          cartImg,
        });
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

import Layout from '../components/layout/layout';
import Cart from '../components/modules/cart';
import '../styles/main.scss';

import { useImmerReducer } from 'use-immer';
import React, { createContext } from 'react';
import { data } from '../data';

export const StateContext = createContext();
export const DispatchContext = createContext();

function MyApp({ Component, pageProps }) {
  const initialState = {
    cartOpen: false,
    data,
    cart: [],
  };

  function Reducer(draft, action) {
    switch (action.type) {
      case 'cartToggle':
        draft.cartOpen = !draft.cartOpen;
        return;
      case 'addToCart':
        const { productIndex, quantity } = action.value;
        const product = draft.data[productIndex];
        const itemIndex = draft.cart.findIndex(
          (item) => item.id === product.id
        );
        const item = draft.cart[itemIndex];
        // If index does not exist, push to array
        if (itemIndex !== -1) {
          item.quantity = item.quantity + quantity;
        } else {
          draft.cart.push({
            quantity,
            id: product.id,
            productName: product.name,
            price: product.price,
          });
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

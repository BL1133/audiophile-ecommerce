import Layout from '../components/layout/layout';
import Cart from '../components/modules/cart';
import '../styles/main.scss';

import { useImmerReducer } from 'use-immer';
import React, { createContext } from 'react';
import data from '../data.json';

export const StateContext = createContext();
export const DispatchContext = createContext();

function MyApp({ Component, pageProps }) {
  const initialState = {
    cartOpen: false,
    cart: [],
    confirmationOpen: false,
    grandTotal: '',
  };

  function Reducer(draft, action) {
    switch (action.type) {
      case 'cartToggle':
        draft.cartOpen = !draft.cartOpen;
        return;
      case 'addToCart':
        const { product, quantity } = action.value;
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
            img: `/assets/cart/image-${product.slug}.jpg`,
            name: product.cartName,
            id: product.id,
            price: product.price,
          });
        }
        return;
      case 'addQuantity':
        const indexToAddQuantity = draft.cart.findIndex(
          (item) => item.id == action.value
        );
        const itemToAdd = draft.cart[indexToAddQuantity];
        itemToAdd.quantity = itemToAdd.quantity + 1;
        return;
      case 'decreaseQuantity':
        const indexToDecreaseQuantity = draft.cart.findIndex(
          (item) => item.id == action.value
        );
        const itemToDecrease = draft.cart[indexToDecreaseQuantity];
        if (itemToDecrease.quantity === 1) {
          draft.cart.splice(indexToDecreaseQuantity, 1);
        }
        if (itemToDecrease.quantity > 1) {
          itemToDecrease.quantity = itemToDecrease.quantity - 1;
        }
        return;
      case 'removeAll':
        draft.cart = [];
        return;
      case 'confirmationToggle':
        draft.confirmationOpen = !draft.confirmationOpen;
        return;
      case 'grandTotal':
        draft.grandTotal = action.value;
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

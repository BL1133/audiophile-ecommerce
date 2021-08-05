import classes from './quantity.module.scss';
import { useContext } from 'react';
import { StateContext } from '../../../pages/_app';
import { DispatchContext } from '../../../pages/_app';

export default function Quantity({ handleRemove, handleAdd, quantity }) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <div className={classes.container}>
      <button onClick={handleRemove} className={classes.button}>
        <p className={classes.quantity}>-</p>
      </button>
      <p className={classes.text}>{quantity}</p>
      <button onClick={handleAdd} className={classes.button}>
        <p className={classes.quantity}>+</p>
      </button>
    </div>
  );
}

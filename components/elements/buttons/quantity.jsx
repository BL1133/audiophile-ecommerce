import classes from './quantity.module.scss';
import { useContext } from 'react';
import { StateContext } from '../../../pages/_app';
import { DispatchContext } from '../../../pages/_app';

export default function Quantity(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <button onClick={props.handleChange} className={classes.button}>
      <p className={classes.quantity}>-</p>
      <p className={classes.text}>1</p>
      <p className={classes.quantity}>+</p>
    </button>
  );
}

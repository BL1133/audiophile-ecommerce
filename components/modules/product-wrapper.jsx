import classes from './product-wrapper.module.scss';

export default function ProductWrapper(props) {
  const reverseClass = props.reverse === true ? classes.reverse : '';

  return (
    <div className={`${reverseClass} ${classes.container}`}>
      {props.children}
    </div>
  );
}

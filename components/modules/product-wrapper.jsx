import classes from './product-wrapper.module.scss';

export default function ProductWrapper(props) {
  // If idx is odd, reverse
  function isOdd(n) {
    return Math.abs(n % 2) == 1;
  }
  const reverseClass = isOdd(props.idx) ? classes.reverse : '';

  return (
    <div className={`${reverseClass} ${classes.container}`}>
      {props.children}
    </div>
  );
}

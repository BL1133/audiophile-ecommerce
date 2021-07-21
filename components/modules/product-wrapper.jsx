import classes from './product-wrapper.module.scss';

export default function ProductWrapper(props) {
  return <div className={classes.container}>{props.children}</div>;
}

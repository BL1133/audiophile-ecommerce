import classes from './product-info.module.scss';

export default function ProductInfo({ newProduct, title, description, light }) {
  return (
    <div className={classes.content}>
      {newProduct ? (
        <p
          className={`${light ? 'overline overline--light' : 'overline'} ${
            classes['new-product']
          }`}
        >
          New Product
        </p>
      ) : null}
      <h1 className={`${classes.title} ${light && classes['title--light']}`}>
        {title}
      </h1>
      <p
        className={`${classes.description} ${
          light && classes['description--light']
        }`}
      >
        {description}
      </p>
    </div>
  );
}

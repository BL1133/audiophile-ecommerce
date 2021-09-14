import classes from './product-info.module.scss';

export default function ProductInfo({
  newProduct,
  title,
  price,
  description,
  light,
  centered,
}) {
  return (
    <div className={`${classes.content}`}>
      {newProduct ? (
        <p
          className={`${light ? 'overline overline--light' : 'overline'} ${
            classes['new-product']
          } ${centered && classes['new-product--centered']}`}
        >
          New Product
        </p>
      ) : null}
      <h2
        className={`${classes.title} ${light && classes['title--light']} ${
          centered && classes['title--centered']
        } `}
      >
        {title}
      </h2>
      <p
        className={`${classes.description} ${
          light && classes['description--light']
        } ${centered && classes['description--centered']}`}
      >
        {description}
      </p>
      {price && <p className={classes.price}>$ {price}</p>}
    </div>
  );
}

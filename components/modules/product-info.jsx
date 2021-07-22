import classes from './product-info.module.scss';

export default function ProductInfo({
  newProduct,
  title,
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
      <h2 className={`${classes.title} ${light && classes['title--light']} `}>
        {title}
      </h2>
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

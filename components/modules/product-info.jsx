import classes from './product-info.module.scss';

export default function ProductInfo({
  newProduct,
  title,
  description,
  light,
  centered,
}) {
  return (
    <div
      className={`${classes.content} ${
        centered && classes['content--centered']
      }`}
    >
      {newProduct ? (
        <p
          className={`${light ? 'overline overline--light' : 'overline'} ${
            classes['new-product']
          } ${centered && classes['new-product--centered']}`}
        >
          New Product
        </p>
      ) : null}
      <h1
        className={`${classes.title} ${light && classes['title--light']} ${
          centered && classes['title--centered']
        }`}
      >
        {title}
      </h1>
      <p
        className={`${classes.description} ${
          light && classes['description--light']
        } ${centered && classes['description--centered']}`}
      >
        {description}
      </p>
    </div>
  );
}

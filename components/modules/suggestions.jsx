import classes from './suggestions.module.scss';
import ImageLoader from '../../components/modules/imageLoader';

import SeeProduct from '../elements/buttons/see-product';

export default function Suggestions({ products }) {
  return (
    <div className={`${classes.container} u-margin-b-m`}>
      <h3 className={classes.heading}>YOU MAY ALSO LIKE</h3>
      <div className={classes.product__container}>
        {products.map((product, idx) => {
          const url = `/products/${product.category}/${product.name
            .replace(/\s+/g, '-')
            .toLowerCase()}`;

          return (
            <div key={idx} className={classes.product}>
              <ImageLoader
                desktop={product.src.desktop}
                tablet={product.src.tablet}
                mobile={product.src.mobile}
                component="suggestions"
              />
              <h4 className={classes.product__title}>{product.name}</h4>
              <SeeProduct url={url} orange={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

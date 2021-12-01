import classes from './suggestions.module.scss';
import ImageLoader from '../../components/modules/imageLoader';

import SeeProduct from '../elements/buttons/see-product';

export default function Suggestions({ product }) {
  const suggestions = product.others;
  return (
    <div className={`${classes.container} u-margin-b-m`}>
      <h3 className={classes.heading}>YOU MAY ALSO LIKE</h3>
      <div className={classes.product__container}>
        {suggestions.map((item, idx) => {
          const url = `/${item.category}/${item.slug}`;

          return (
            <div key={idx} className={classes.product}>
              <ImageLoader
                desktop={item.image.desktop}
                tablet={item.image.tablet}
                mobile={item.image.mobile}
                component="suggestions"
              />
              <h4 className={classes.product__title}>{item.name}</h4>
              <SeeProduct url={url} orange={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

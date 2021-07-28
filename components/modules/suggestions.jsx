import classes from './suggestions.module.scss';
import Image from 'next/image';

import SeeProduct from '../elements/buttons/see-product';

export default function Suggestions({ products }) {
  return (
    <div className={`${classes.container} u-margin-b-l`}>
      <h3>YOU MAY ALSO LIKE</h3>
      <div className={classes.product__container}>
        {products.map((product) => {
          const url = `/products/${product.category}/${product.name
            .replace(/\s+/g, '-')
            .toLowerCase()}`;

          return (
            <div className={classes.product}>
              <Image src={product.src} width={350} height={318} />
              <h4 className={classes.product__title}>{product.name}</h4>
              <SeeProduct url={url} orange={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

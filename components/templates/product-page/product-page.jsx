import classes from './product-page.module.scss';

import CompanyDescription from '../../modules/company-description';
import ProductsGrid from '../../modules/products-grid';

export default function ProductPage(props) {
  return (
    <div className="u-margin-b-m">
      <div className={classes.product}>{props.children}</div>
      <ProductsGrid />
      <CompanyDescription />
    </div>
  );
}

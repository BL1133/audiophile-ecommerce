import classes from './product-page.module.scss';
import CompanyDescription from '../../modules/company-description';
import ProductsGrid from '../../modules/products-grid';
import GoBack from '../../elements/buttons/go-back';

export default function ProductPage(props) {
  return (
    <div className={`${classes.container} u-margin-b-m`}>
      <GoBack />
      <div className={classes.product}>{props.children}</div>
      <ProductsGrid />
      <CompanyDescription />
    </div>
  );
}

import classes from './product-section.module.scss';
import Border from '../../elements/border-hr';
import CompanyDescription from '../../modules/company-description';
import ProductsGrid from '../../modules/products-grid';

export default function ProductSection(props) {
  return (
    <div className="u-margin-b-m">
      <header className={classes.header}>
        {/* <Border /> */}
        <h2 className={classes.title}>{props.title}</h2>
      </header>
      <div className={classes.products}>{props.children}</div>
      <ProductsGrid />
      <CompanyDescription />
    </div>
  );
}

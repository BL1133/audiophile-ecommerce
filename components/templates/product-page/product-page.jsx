import classes from './product-page.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CompanyDescription from '../../modules/company-description';
import ProductsGrid from '../../modules/products-grid';

export default function ProductPage(props) {
  const router = useRouter();

  return (
    <div className={`${classes.container} u-margin-b-m`}>
      <button className={classes.button} onClick={() => router.back()}>
        Go Back
      </button>
      <div className={classes.product}>{props.children}</div>
      <ProductsGrid />
      <CompanyDescription />
    </div>
  );
}

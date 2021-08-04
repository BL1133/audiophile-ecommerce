import classes from './index.module.scss';

import Border from '../components/elements/border-hr';
import Hero from '../components/pages/home-page/hero';
import ProductsGrid from '../components/modules/products-grid';
import FeaturedProducts from '../components/pages/home-page/featured-products';
import CompanyDescription from '../components/modules/company-description';

export default function Home() {
  return (
    <section className={classes.section}>
      <Border />
      <Hero />
      <ProductsGrid />
      <FeaturedProducts />
      <CompanyDescription />
    </section>
  );
}

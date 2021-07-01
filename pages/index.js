import Head from 'next/head';
import Image from 'next/image';

import Hero from '../components/pages/home-page/hero';
import ProductsGrid from '../components/modules/products-grid';
import FeaturedProducts from '../components/pages/home-page/featured-products';
import CompanyDescription from '../components/modules/company-description';

export default function Home() {
  return (
    <section>
      <Hero />
      <ProductsGrid />
      <FeaturedProducts />
      <CompanyDescription />
    </section>
  );
}

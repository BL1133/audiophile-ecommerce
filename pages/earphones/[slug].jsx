import ProductPage from '../../components/templates/product-page/product-page';
import ProductGallery from '../../components/pages/product-page/product-gallery';
import Suggestions from '../../components/modules/suggestions';
import Product from '../../components/pages/product-page/product';
import ProductInfo from '../../components/modules/product-info';

import getProductData from '../../lib/products-util';

export default function index() {
  return (
    <ProductPage>
      <Product>
        <ProductInfo />
      </Product>
      <ProductGallery />
      <Suggestions />
    </ProductPage>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
}

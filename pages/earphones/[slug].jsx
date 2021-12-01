import ProductPage from '../../components/templates/product-page/product-page';
import ProductGallery from '../../components/pages/product-page/product-gallery';
import Suggestions from '../../components/modules/suggestions';
import Product from '../../components/pages/product-page/product';
import ProductInfo from '../../components/modules/product-info';

import { getProductData } from '../../lib/products-util';
import { getProductsFromCategory } from '../../lib/products-util';

export default function index({ product }) {
  return (
    <ProductPage>
      <Product product={product}>
        <ProductInfo product={product} isNewProduct={product.new} />
      </Product>
      <ProductGallery product={product} />
      <Suggestions product={product} />
    </ProductPage>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const productData = getProductData(slug);

  return {
    props: {
      product: productData,
    },
  };
}
export async function getStaticPaths() {
  // Return a list of possible value for slug
  const paths = getProductsFromCategory('earphones');

  return {
    paths,
    fallback: false,
  };
}

import ProductPage from '../../../../components/templates/product-page/product-page';
import ProductGallery from '../../../../components/pages/product-page/product-gallery';
import Suggestions from '../../../../components/modules/suggestions';
import Product from '../../../../components/pages/product-page/product';
import ProductInfo from '../../../../components/modules/product-info';

// Product main
import Desktop from '../../../../assets/product-zx9-speaker/desktop/image-product.jpg';
import Tablet from '../../../../assets/product-zx9-speaker/tablet/image-product.jpg';
import Mobile from '../../../../assets/product-zx9-speaker/mobile/image-product.jpg';
// Cart
import cartImg from '../../../../assets/cart/image-zx9-speaker.jpg';
// Product Gallery
import img1 from '../../../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg';
import img2 from '../../../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg';
import img3 from '../../../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg';
// Suggestions
import product1_d from '../../../../assets/shared/desktop/image-zx7-speaker.jpg';
import product1_t from '../../../../assets/shared/tablet/image-zx7-speaker.jpg';
import product1_m from '../../../../assets/shared/mobile/image-zx7-speaker.jpg';
import product2_d from '../../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import product2_t from '../../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg';
import product2_m from '../../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import product3_d from '../../../../assets/shared/desktop/image-xx59-headphones.jpg';
import product3_t from '../../../../assets/shared/tablet/image-xx59-headphones.jpg';
import product3_m from '../../../../assets/shared/mobile/image-xx59-headphones.jpg';

export default function index() {
  // In real life, this wouldn't be hardcoded
  const suggestions = [
    {
      name: 'ZX7 SPEAKER',
      src: { desktop: product1_d, tablet: product1_t, mobile: product1_m },
      category: 'speakers',
    },
    {
      name: 'XX99 MARK I',
      src: { desktop: product2_d, tablet: product2_t, mobile: product2_m },
      category: 'headphones',
    },
    {
      name: 'XX59',
      src: { desktop: product3_d, tablet: product3_t, mobile: product3_m },
      category: 'headphones',
    },
  ];

  return (
    <ProductPage>
      <Product index={5} desktop={Desktop} tablet={Tablet} mobile={Mobile}>
        <ProductInfo
          newProduct={true}
          title="ZX9 SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          light={false}
          centered={false}
        />
      </Product>
      <ProductGallery img1={img1} img2={img2} img3={img3} />
      <Suggestions products={suggestions} />
    </ProductPage>
  );
}

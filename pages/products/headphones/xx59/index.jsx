import ProductPage from '../../../../components/templates/product-page/product-page';
import ProductGallery from '../../../../components/pages/product-page/product-gallery';
import Suggestions from '../../../../components/modules/suggestions';
import Product from '../../../../components/pages/product-page/product';
import ProductInfo from '../../../../components/modules/product-info';

// Product main
import Desktop from '../../../../assets/product-xx59-headphones/desktop/image-product.jpg';
import Tablet from '../../../../assets/product-xx59-headphones/tablet/image-product.jpg';
import Mobile from '../../../../assets/product-xx59-headphones/mobile/image-product.jpg';
// Cart
import cartImg from '../../../../assets/cart/image-xx59-headphones.jpg';
// Product Gallery
import img1 from '../../../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg';
import img2 from '../../../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg';
import img3 from '../../../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg';
// Suggestions
import product1_d from '../../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import product1_t from '../../../../assets/shared/tablet/image-xx99-mark-two-headphones.jpg';
import product1_m from '../../../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import product2_d from '../../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import product2_t from '../../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg';
import product2_m from '../../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import product3_d from '../../../../assets/shared/desktop/image-zx9-speaker.jpg';
import product3_t from '../../../../assets/shared/tablet/image-zx9-speaker.jpg';
import product3_m from '../../../../assets/shared/mobile/image-zx9-speaker.jpg';

export default function index() {
  // In real life, this wouldn't be hardcoded
  const suggestions = [
    {
      name: 'XX99 MARK II',
      src: { desktop: product1_d, tablet: product1_t, mobile: product1_m },
      category: 'headphones',
    },
    {
      name: 'XX99 MARK I',
      src: { desktop: product2_d, tablet: product2_t, mobile: product2_m },
      category: 'headphones',
    },
    {
      name: 'ZX9 SPEAKER',
      src: { desktop: product3_d, tablet: product3_t, mobile: product3_m },
      category: 'speakers',
    },
  ];

  return (
    <ProductPage>
      <Product
        index={1}
        desktop={Desktop}
        tablet={Tablet}
        mobile={Mobile}
        name="XX59"
      >
        <ProductInfo
          newProduct={false}
          title="XX59 HEADPHONES"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          light={false}
          centered={false}
        />
      </Product>
      <ProductGallery img1={img1} img2={img2} img3={img3} />
      <Suggestions products={suggestions} />
    </ProductPage>
  );
}

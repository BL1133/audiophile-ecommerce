import classes from './index.module.scss';

import ProductPage from '../../../../components/templates/product-page/product-page';
import ProductGallery from '../../../../components/pages/product-page/product-gallery';
import Suggestions from '../../../../components/modules/suggestions';
import Product from '../../../../components/pages/product-page/product';
import ProductInfo from '../../../../components/modules/product-info';

// Product main
import Desktop from '../../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import Tablet from '../../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg';
import Mobile from '../../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';
// Product cart
import cartImg from '../../../../assets/cart/image-xx99-mark-two-headphones.jpg';
// Product Gallery
import img1 from '../../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import img2 from '../../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import img3 from '../../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';
// Suggestions
import product1_d from '../../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import product1_t from '../../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg';
import product1_m from '../../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import product2_d from '../../../../assets/shared/desktop/image-xx59-headphones.jpg';
import product2_t from '../../../../assets/shared/tablet/image-xx59-headphones.jpg';
import product2_m from '../../../../assets/shared/mobile/image-xx59-headphones.jpg';
import product3_d from '../../../../assets/shared/desktop/image-zx9-speaker.jpg';
import product3_t from '../../../../assets/shared/tablet/image-zx9-speaker.jpg';
import product3_m from '../../../../assets/shared/mobile/image-zx9-speaker.jpg';

export default function index() {
  const featuresDescription = (
    <p>
      Featuring a genuine leather head strap and premium earcups, these
      headphones deliver superior comfort for those who like to enjoy endless
      listening. It includes intuitive controls designed for any situation.
      Whether you’re taking a business call or just in your own personal space,
      the auto on/off and pause features ensure that you’ll never miss a beat.
      <br />
      <br />
      The advanced Active Noise Cancellation with built-in equalizer allow you
      to experience your audio world on your terms. It lets you enjoy your audio
      in peace, but quickly interact with your surroundings when you need to.
      Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery
      life, the XX99 Mark II headphones gives you superior sound, cutting-edge
      technology, and a modern design aesthetic.
    </p>
  );
  const includedItems = [
    { quantity: 1, name: 'Headphone Unit' },
    { quantity: 2, name: 'Replacement Earcups' },
    { quantity: 1, name: 'User Manual' },
    { quantity: 1, name: '3.5mm 5m Audio Cable' },
    { quantity: 1, name: 'Travel Bag' },
  ];
  // In real life, this wouldn't be hardcoded
  const suggestions = [
    {
      name: 'XX99 MARK I',
      src: { desktop: product1_d, tablet: product1_t, mobile: product1_m },
      category: 'headphones',
    },
    {
      name: 'XX59',
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
        productName="XX99 MK II"
        price="$ 2,999"
        cartImg={cartImg}
        features={featuresDescription}
        included={includedItems}
        desktop={Desktop}
        tablet={Tablet}
        mobile={Mobile}
        centered={false}
      >
        <ProductInfo
          newProduct={true}
          title="XX99 MARK II HEADPHONES"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          light={false}
          centered={false}
        />
      </Product>
      <ProductGallery img1={img1} img2={img2} img3={img3} />
      <Suggestions products={suggestions} />
    </ProductPage>
  );
}

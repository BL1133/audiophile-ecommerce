import classes from './index.module.scss';

import ProductPage from '../../../../components/templates/product-page/product-page';
import ProductGallery from '../../../../components/pages/product-page/product-gallery';
import Suggestions from '../../../../components/modules/suggestions';
import Product from '../../../../components/pages/product-page/product';
import ProductInfo from '../../../../components/modules/product-info';

// Product main
import Desktop from '../../../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import Tablet from '../../../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg';
import Mobile from '../../../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg';
// Product Gallery
import img1 from '../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg';
import img2 from '../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg';
import img3 from '../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';
// Suggestions
import product1_d from '../../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import product1_t from '../../../../assets/shared/tablet/image-xx99-mark-two-headphones.jpg';
import product1_m from '../../../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import product2_d from '../../../../assets/shared/desktop/image-xx59-headphones.jpg';
import product2_t from '../../../../assets/shared/tablet/image-xx59-headphones.jpg';
import product2_m from '../../../../assets/shared/mobile/image-xx59-headphones.jpg';
import product3_d from '../../../../assets/shared/desktop/image-zx9-speaker.jpg';
import product3_t from '../../../../assets/shared/tablet/image-zx9-speaker.jpg';
import product3_m from '../../../../assets/shared/mobile/image-zx9-speaker.jpg';

export default function index() {
  const featuresDescription = (
    <p>
      As the headphones all others are measured against, the XX99 Mark I
      demonstrates over five decades of audio expertise, redefining the critical
      listening experience. This pair of closed-back headphones are made of
      industrial, aerospace-grade materials to emphasize durability at a
      relatively light weight of 11 oz.
      <br />
      <br />
      From the handcrafted microfiber ear cushions to the robust metal headband
      with inner damping element, the components work together to deliver
      comfort and uncompromising sound. Its closed-back design delivers up to 27
      dB of passive noise cancellation, reducing resonance by reflecting sound
      to a dedicated absorber. For connectivity, a specially tuned cable is
      included with a balanced gold connector.
    </p>
  );
  const includedItems = [
    { quantity: 1, name: 'Headphone Unit' },
    { quantity: 2, name: 'Replacement Earcups' },
    { quantity: 1, name: 'User Manual' },
    { quantity: 1, name: '3.5mm 5m Audio Cable' },
  ];
  // In real life, this wouldn't be hardcoded
  const suggestions = [
    {
      name: 'XX99 MARK II',
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
        price="$ 1,750"
        features={featuresDescription}
        included={includedItems}
        desktop={Desktop}
        tablet={Tablet}
        mobile={Mobile}
        centered={false}
      >
        <ProductInfo
          newProduct={false}
          title="XX99 MARK II HEADPHONES"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. "
          light={false}
          centered={false}
        />
      </Product>
      <ProductGallery img1={img1} img2={img2} img3={img3} />
      <Suggestions products={suggestions} />
    </ProductPage>
  );
}

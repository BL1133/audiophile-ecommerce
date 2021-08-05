import classes from './index.module.scss';

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
  const featuresDescription = (
    <p>
      Connect via Bluetooth or nearly any wired source. This speaker features
      optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs,
      allowing you to have up to five wired source devices connected for easy
      switching. Improved bluetooth technology offers near lossless audio
      quality at up to 328ft (100m).
      <br />
      <br />
      Discover clear, more natural sounding highs than the competition with
      ZX9’s signature planar diaphragm tweeter. Equally important is its
      powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit.
      You’ll be able to enjoy equal sound quality whether in a large room or
      small den. Furthermore, you will experience new sensations from old songs
      since it can respond to even the subtle waveforms.
    </p>
  );
  const includedItems = [
    { quantity: 2, name: 'Speaker Unit' },
    { quantity: 2, name: 'Speaker cloth panel' },
    { quantity: 1, name: 'User Manual' },
    { quantity: 1, name: '3.5mm 5m Audio Cable' },
    { quantity: 1, name: '10m Optical Cable' },
  ];
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
      <Product
        productName="ZX9"
        cartImg={cartImg}
        price="$ 4,500"
        features={featuresDescription}
        included={includedItems}
        desktop={Desktop}
        tablet={Tablet}
        mobile={Mobile}
        centered={false}
      >
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

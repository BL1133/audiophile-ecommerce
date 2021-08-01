import classes from './index.module.scss';

import ProductPage from '../../../../components/templates/product-page/product-page';
import ProductGallery from '../../../../components/pages/product-page/product-gallery';
import Suggestions from '../../../../components/modules/suggestions';
import Product from '../../../../components/pages/product-page/product';
import ProductInfo from '../../../../components/modules/product-info';

// Product main
import Desktop from '../../../../assets/product-zx7-speaker/desktop/image-product.jpg';
import Tablet from '../../../../assets/product-zx7-speaker/tablet/image-product.jpg';
import Mobile from '../../../../assets/product-zx7-speaker/mobile/image-product.jpg';
// Product Gallery
import img1 from '../../../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
import img2 from '../../../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg';
import img3 from '../../../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg';
// Suggestions
import product1_d from '../../../../assets/shared/desktop/image-zx9-speaker.jpg';
import product1_t from '../../../../assets/shared/tablet/image-zx9-speaker.jpg';
import product1_m from '../../../../assets/shared/mobile/image-zx9-speaker.jpg';
import product2_d from '../../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import product2_t from '../../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg';
import product2_m from '../../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import product3_d from '../../../../assets/shared/desktop/image-xx59-headphones.jpg';
import product3_t from '../../../../assets/shared/tablet/image-xx59-headphones.jpg';
import product3_m from '../../../../assets/shared/mobile/image-xx59-headphones.jpg';

export default function index() {
  const featuresDescription = (
    <p>
      Reap the advantages of a flat diaphragm tweeter cone. This provides a fast
      response rate and excellent high frequencies that lower tiered bookshelf
      speakers cannot provide. The woofers are made from aluminum that produces
      a unique and clear sound. XLR inputs allow you to connect to a mixer for
      more advanced usage.
      <br />
      <br />
      The ZX7 speaker is the perfect blend of stylish design and high
      performance. It houses an encased MDF wooden enclosure which minimises
      acoustic resonance. Dual connectivity allows pairing through bluetooth or
      traditional optical and RCA input. Switch input sources and control volume
      at your finger tips with the included wireless remote. This versatile
      speaker is equipped to deliver an authentic listening experience.
    </p>
  );
  const includedItems = [
    { quantity: 2, name: 'Speaker Unit' },
    { quantity: 2, name: 'Speaker cloth panel' },
    { quantity: 1, name: 'User Manual' },
    { quantity: 1, name: '3.5mm 7.5m Audio Cable' },
    { quantity: 1, name: '7.5m Optical Cable' },
  ];
  // In real life, this wouldn't be hardcoded
  const suggestions = [
    {
      name: 'ZX9 SPEAKER',
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
        price="$ 3,500"
        features={featuresDescription}
        included={includedItems}
        desktop={Desktop}
        tablet={Tablet}
        mobile={Mobile}
        centered={false}
      >
        <ProductInfo
          newProduct={false}
          title="ZX7 SPEAKER"
          description="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          light={false}
          centered={false}
        />
      </Product>
      <ProductGallery img1={img1} img2={img2} img3={img3} />
      <Suggestions products={suggestions} />
    </ProductPage>
  );
}

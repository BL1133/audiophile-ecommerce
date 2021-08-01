import classes from './index.module.scss';

import ProductPage from '../../../../components/templates/product-page/product-page';
import ProductGallery from '../../../../components/pages/product-page/product-gallery';
import Suggestions from '../../../../components/modules/suggestions';
import Product from '../../../../components/pages/product-page/product';
import ProductInfo from '../../../../components/modules/product-info';

// Product main
import Desktop from '../../../../assets/product-xx59-headphones/desktop/image-product.jpg';
import Tablet from '../../../../assets/product-xx59-headphones/tablet/image-product.jpg';
import Mobile from '../../../../assets/product-xx59-headphones/mobile/image-product.jpg';
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
  const featuresDescription = (
    <p>
      These headphones have been created from durable, high-quality materials
      tough enough to take anywhere. Its compact folding design fuses comfort
      and minimalist style making it perfect for travel. Flawless transmission
      is assured by the latest wireless technology engineered for audio
      synchronization with videos.
      <br />
      <br />
      More than a simple pair of headphones, this headset features a pair of
      built-in microphones for clear, hands-free calling when paired with a
      compatible smartphone. Controlling music and calls is also intuitive
      thanks to easy-access touch buttons on the earcups. Regardless of how you
      use the XX59 headphones, you can do so all day thanks to an impressive
      30-hour battery life that can be rapidly recharged via USB-C.
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
        price="$ 899"
        features={featuresDescription}
        included={includedItems}
        desktop={Desktop}
        tablet={Tablet}
        mobile={Mobile}
        centered={false}
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

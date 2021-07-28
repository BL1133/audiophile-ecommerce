import classes from './index.module.scss';

import ProductPage from '../../../../components/templates/product-page/product-page';
import ProductGallery from '../../../../components/pages/product-page/product-gallery';
import Suggestions from '../../../../components/modules/suggestions';
import Product from '../../../../components/pages/product-page/product';
import ProductInfo from '../../../../components/modules/product-info';

import img1 from '../../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import img2 from '../../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import img3 from '../../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';

import product1 from '../../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import product2 from '../../../../assets/shared/desktop/image-xx59-headphones.jpg';
import product3 from '../../../../assets/shared/desktop/image-zx9-speaker.jpg';

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
    { name: 'XX99 MARK I', src: product1, category: 'headphones' },
    { name: 'XX59', src: product2, category: 'headphones' },
    { name: 'ZX9 SPEAKER', src: product3, category: 'speakers' },
  ];

  return (
    <ProductPage>
      <Product
        price="$ 2,999"
        features={featuresDescription}
        included={includedItems}
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

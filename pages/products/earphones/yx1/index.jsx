import classes from './index.module.scss';

import ProductPage from '../../../../components/templates/product-page/product-page';
import ProductGallery from '../../../../components/pages/product-page/product-gallery';
import Suggestions from '../../../../components/modules/suggestions';
import Product from '../../../../components/pages/product-page/product';
import ProductInfo from '../../../../components/modules/product-info';

// Product main
import Desktop from '../../../../assets/product-yx1-earphones/desktop/image-product.jpg';
import Tablet from '../../../../assets/product-yx1-earphones/tablet/image-product.jpg';
import Mobile from '../../../../assets/product-yx1-earphones/mobile/image-product.jpg';
// Cart
import cartImg from '../../../../assets/cart/image-yx1-earphones.jpg';
// Product Gallery
import img1 from '../../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import img2 from '../../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import img3 from '../../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg';
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
      Experience unrivalled stereo sound thanks to innovative acoustic
      technology. With improved ergonomics designed for full day wearing, these
      revolutionary earphones have been finely crafted to provide you with the
      perfect fit, delivering complete comfort all day long while enjoying
      exceptional noise isolation and truly immersive sound.
      <br />
      <br />
      The YX1 Wireless Earphones features customizable controls for volume,
      music, calls, and voice assistants built into both earbuds. The new 7-hour
      battery life can be extended up to 28 hours with the charging case, giving
      you uninterrupted play time. Exquisite craftsmanship with a splash
      resistant design now available in an all new white and grey color scheme
      as well as the popular classic black.
    </p>
  );
  const includedItems = [
    { quantity: 2, name: 'Earphone Unit' },
    { quantity: 6, name: 'Mult-size Earplugs' },
    { quantity: 1, name: 'User Manual' },
    { quantity: 1, name: 'USB-C Charging Cable' },
    { quantity: 1, name: 'Travel Pouch' },
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
        productName="YX1"
        cartImg={cartImg}
        price="$ 599"
        features={featuresDescription}
        included={includedItems}
        desktop={Desktop}
        tablet={Tablet}
        mobile={Mobile}
        centered={false}
      >
        <ProductInfo
          newProduct={true}
          title="YX1 WIRELESS EARPHONES"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          light={false}
          centered={false}
        />
      </Product>
      <ProductGallery img1={img1} img2={img2} img3={img3} />
      <Suggestions products={suggestions} />
    </ProductPage>
  );
}

import classes from './index.module.scss';
import ProductSection from '../../../components/templates/product-section/product-section';

import ProductInfo from '../../../components/modules/product-info';
import SeeProduct from '../../../components/elements/buttons/see-product';
import ProductWrapper from '../../../components/modules/product-wrapper';
import ImageLoader from '../../../components/modules/imageLoader';

import yx1d from '../../../assets/category-earphones/desktop/image-yx1-earphones.jpg';
import yx1t from '../../../assets/category-earphones/tablet/image-yx1-earphones.jpg';
import yx1m from '../../../assets/category-earphones/mobile/image-yx1-earphones.jpg';

export default function EarphonesSection() {
  return (
    <ProductSection title="Earphones">
      <section className={`${classes.section} u-margin-b-m`}>
        <ProductWrapper>
          <ImageLoader desktop={yx1d} tablet={yx1t} mobile={yx1m} />
          <div className={classes.product}>
            <ProductInfo
              newProduct={true}
              title="YX1 Wireless Earphones"
              description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
            />
            <div className={classes.button}>
              <SeeProduct orange={true} url="/product/yx1" />
            </div>
          </div>
        </ProductWrapper>
      </section>
    </ProductSection>
  );
}

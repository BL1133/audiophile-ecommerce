import classes from './index.module.scss';
import ProductSection from '../../components/templates/product-section/product-section';

import ProductInfo from '../../components/modules/product-info';
import SeeProduct from '../../components/elements/buttons/see-product';
import ProductWrapper from '../../components/modules/product-wrapper';
import ImageLoader from '../../components/modules/imageLoader';

import ZX9d from '../../assets/category-speakers/desktop/image-zx9.jpg';
import ZX9t from '../../assets/category-speakers/tablet/image-zx9.jpg';
import ZX9m from '../../assets/category-speakers/mobile/image-zx9.jpg';
import ZX7d from '../../assets/category-speakers/desktop/image-zx7.jpg';
import ZX7t from '../../assets/category-speakers/tablet/image-zx7.jpg';
import ZX7m from '../../assets/category-speakers/mobile/image-zx7.jpg';

export default function SpeakersSection() {
  return (
    <ProductSection title="Speakers">
      <section className={`${classes.section} u-margin-b-m`}>
        <ProductWrapper>
          <ImageLoader
            desktop={ZX9d}
            tablet={ZX9t}
            mobile={ZX9m}
            component="product-category"
          />
          <div className={classes.product}>
            <ProductInfo
              centered={true}
              newProduct={true}
              title="ZX9 Speaker"
              description="Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
            />
            <div className={classes.button}>
              <SeeProduct orange={true} url="/speakers/zx9-speaker" />
            </div>
          </div>
        </ProductWrapper>
        {/* --------------------------------- */}
        <ProductWrapper reverse={true}>
          <div className={classes.product}>
            <ProductInfo
              centered={true}
              newProduct={false}
              title="ZX7 Speaker"
              description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
            />
            <div className={classes.button}>
              <SeeProduct orange={true} url="/speakers/zx7-speaker" />
            </div>
          </div>
          <ImageLoader
            desktop={ZX7d}
            tablet={ZX7t}
            mobile={ZX7m}
            component="product-category"
          />
        </ProductWrapper>
      </section>
    </ProductSection>
  );
}

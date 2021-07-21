import classes from './index.module.scss';
import ProductSection from '../../../components/templates/product-section/product-section';
import Image from 'next/image';

import ProductInfo from '../../../components/modules/product-info';
import SeeProduct from '../../../components/elements/buttons/see-product';
import ProductWrapper from '../../../components/modules/product-wrapper';

import ZX9 from '../../../assets/category-speakers/desktop/image-zx9.jpg';
import ZX7 from '../../../assets/category-speakers/desktop/image-zx7.jpg';

export default function SpeakersSection() {
  return (
    <ProductSection title="Speakers">
      <section className={`${classes.section} u-margin-b-m`}>
        <ProductWrapper>
          <Image src={ZX9} width={540} height={560} className={classes.image} />
          <div className={classes.product__info}>
            <ProductInfo
              newProduct={true}
              title="ZX9 Speaker"
              description="Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
            />
            <div className={classes.button}>
              <SeeProduct orange={true} url="/product/zx9" />
            </div>
          </div>
        </ProductWrapper>
        {/* --------------------------------- */}
        <ProductWrapper>
          <div className={classes.product__info}>
            <ProductInfo
              newProduct={false}
              title="ZX7 Speaker"
              description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
            />
            <div className={classes.button}>
              <SeeProduct orange={true} url="/product/zx7" />
            </div>
          </div>
          <Image src={ZX7} width={540} height={560} className={classes.image} />
        </ProductWrapper>
      </section>
    </ProductSection>
  );
}

import classes from './index.module.scss';
import ProductSection from '../../components/templates/product-section/product-section';

import ProductInfo from '../../components/modules/product-info';
import SeeProduct from '../../components/elements/buttons/see-product';
import ProductWrapper from '../../components/modules/product-wrapper';
import ImageLoader from '../../components/modules/imageLoader';

import XX99mk2d from '../../public/assets/category-headphones/desktop/image-xx99-mark-two.jpg';
import XX99mk2t from '../../public/assets/category-headphones/tablet/image-xx99-mark-two.jpg';
import XX99mk2m from '../../public/assets/category-headphones/mobile/image-xx99-mark-two.jpg';
import XX99mk1d from '../../public/assets/category-headphones/desktop/image-xx99-mark-one.jpg';
import XX99mk1t from '../../public/assets/category-headphones/tablet/image-xx99-mark-one.jpg';
import XX99mk1m from '../../public/assets/category-headphones/mobile/image-xx99-mark-one.jpg';
import XX59d from '../../public/assets/category-headphones/desktop/image-xx59.jpg';
import XX59t from '../../public/assets/category-headphones/tablet/image-xx59.jpg';
import XX59m from '../../public/assets/category-headphones/mobile/image-xx59.jpg';

export default function HeadphonesSection() {
  return (
    <ProductSection title="Headphones">
      <section className={`${classes.section} u-margin-b-m`}>
        <ProductWrapper>
          <ImageLoader
            desktop={XX99mk2d}
            tablet={XX99mk2t}
            mobile={XX99mk2m}
            component="product-category"
          />
          <div className={classes.product}>
            <ProductInfo
              centered={true}
              newProduct={true}
              title="XX99 Mark II Headphones"
              description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            />
            <div className={classes.button}>
              <SeeProduct orange={true} url="/headphones/xx99-mark-ii" />
            </div>
          </div>
        </ProductWrapper>
        {/* --------------------------------- */}
        <ProductWrapper reverse={true}>
          <div className={classes.product}>
            <ProductInfo
              centered={true}
              newProduct={false}
              title="XX99 Mark I Headphones"
              description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
            />
            <div className={classes.button}>
              <SeeProduct orange={true} url="/headphones/xx99-mark-i" />
            </div>
          </div>
          <ImageLoader
            desktop={XX99mk1d}
            tablet={XX99mk1t}
            mobile={XX99mk1m}
            component="product-category"
          />
        </ProductWrapper>
        {/* --------------------------------- */}
        <ProductWrapper>
          <ImageLoader
            desktop={XX59d}
            tablet={XX59t}
            mobile={XX59m}
            component="product-category"
          />
          <div className={classes.product}>
            <ProductInfo
              centered={true}
              newProduct={false}
              title="XX59 Headphones"
              description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
            />
            <div className={classes.button}>
              <SeeProduct orange={true} url="/headphones/xx59" />
            </div>
          </div>
        </ProductWrapper>
      </section>
    </ProductSection>
  );
}

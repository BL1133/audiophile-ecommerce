import classes from './hero.module.scss';
import ProductInfo from '../../pages/home-page/product-info';
import SeeProduct from '../../elements/buttons/see-product';

function Hero() {
  return (
    <div className="u-margin-b-s">
      <div className={classes.container}>
        <div className={classes.content}>
          <ProductInfo
            newProduct={true}
            title="XX99 Mark II Headphone"
            description="Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast."
            light={true}
            centered={true}
          />
          <div className={classes.button}>
            <SeeProduct orange={true} url="/products/headphones/xx99-mark-ii" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

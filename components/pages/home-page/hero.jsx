import classes from './hero.module.scss';
import Image from 'next/image';
import ProductInfo from '../../modules/product-info';
import SeeProduct from '../../elements/buttons/see-product';

function Hero() {
  return (
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
          <SeeProduct orange={true} url="/product/xx99" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

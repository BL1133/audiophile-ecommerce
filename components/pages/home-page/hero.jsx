import classes from './hero.module.scss';
import Image from 'next/image';
import ProductInfo from '../../modules/product-info';
import SeeProduct from '../../elements/buttons/see-product';

function Hero() {
  return (
    <div className={classes.container}>
      <ProductInfo
        newProduct={true}
        title="XX99 Mark II Headphones"
        description="Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast."
        light={true}
      />
      <SeeProduct orange={true} url="/product/xx99" />
    </div>
  );
}

export default Hero;

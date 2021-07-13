import React from 'react';
import classes from './featured-products.module.scss';
import Image from 'next/image';

import Button from '../../elements/buttons/see-product';
import FeaturedImage from '../../../assets/home/desktop/image-speaker-zx9.png';
import Circles from '../../../assets/home/desktop/pattern-circles.svg';

export default function FeaturedProducts() {
  return (
    <div className={classes.container}>
      <div className={`${classes['featured--primary']} u-border-r`}>
        <div className={classes['img-wrapper']}>
          <div className={classes.circles}></div>
          <Image
            className={classes.img}
            src={FeaturedImage}
            layout="responsive"
          />
        </div>
        <div className={classes['featured--primary__content']}>
          <h1 className={classes['featured--primary__title']}>
            ZX9 <br />
            SPEAKER
          </h1>
          <p className={classes['featured--primary__text']}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button black={true} url="/products/speakers/zx9" />
        </div>
      </div>
    </div>
  );
}

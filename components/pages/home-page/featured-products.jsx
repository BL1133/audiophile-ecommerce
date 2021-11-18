import React from 'react';
import classes from './featured-products.module.scss';
import Image from 'next/image';

import SeeProduct from '../../elements/buttons/see-product';
import FeaturedImage from '../../../public/assets/home/desktop/image-speaker-zx9.png';
import Circles from '../../../public/assets/home/desktop/pattern-circles.svg';

export default function FeaturedProducts() {
  return (
    <div className={`${classes.container} u-margin-b-m`}>
      {/* Primary */}
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
          <SeeProduct black={true} url="/speakers/zx9-speaker" />
        </div>
      </div>
      {/* Secondary */}
      <div className={`${classes.secondary} u-border-r`}>
        <div className={classes.secondary__content}>
          <h4>zx7 speaker</h4>
          <SeeProduct clear={true} url="/speakers/zx7-speaker" />
        </div>
      </div>
      {/* Tertiary */}
      <div className={`${classes.tertiary} u-border-r`}>
        <div className={`${classes.tertiary__img} u-border-r`}></div>
        <div className={`${classes.tertiary__content} u-border-r`}>
          <h4>yx1 earphones</h4>
          <SeeProduct clear={true} url="/earphones/yx1" />
        </div>
      </div>
    </div>
  );
}

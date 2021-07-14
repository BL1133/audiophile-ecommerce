import React from 'react';
import classes from './company-description.module.scss';

export default function CompanyDescription() {
  return (
    <div className={`${classes.container} u-margin-b-l`}>
      <div className={classes.content}>
        <h2>
          Bringing you the{' '}
          <span className={classes.content__highlight}>BEST</span> audio gear
        </h2>
        <p className={classes.content__text}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={`${classes.image} u-border-r`}></div>
    </div>
  );
}

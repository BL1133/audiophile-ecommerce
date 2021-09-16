import { Fragment } from 'react';
import classes from './imageLoader.module.scss';
import Image from 'next/image';

export default function ImageLoader({ desktop, tablet, mobile, component }) {
  const productPage = {
    desktop: {
      width: '540',
      height: '560',
    },
    tablet: {
      width: '281',
      height: '480',
    },
    mobile: {
      width: '327',
      height: '327',
    },
  };
  const categoryPage = {
    desktop: {
      width: '540',
      height: '560',
    },
    tablet: {
      width: '1378',
      height: '700',
    },
    mobile: {
      width: '654',
      height: '704',
    },
  };
  const suggestionsPage = {
    desktop: {
      width: '350',
      height: '318',
    },
    tablet: {
      width: '223',
      height: '318',
    },
    mobile: {
      width: '427',
      height: '200',
    },
  };

  switch (component) {
    case 'product':
      return (
        <Fragment>
          <div className={classes.desktop}>
            <Image
              src={desktop}
              width={productPage.desktop.width}
              height={productPage.desktop.height}
              loading="lazy"
            />
          </div>
          <div className={classes.tablet}>
            <Image
              src={tablet}
              width={productPage.tablet.width}
              height={productPage.tablet.height}
              loading="lazy"
            />
          </div>
          <div className={classes.mobile}>
            <Image
              src={mobile}
              objectFit="cover"
              layout="fill"
              loading="lazy"
            />
          </div>
        </Fragment>
      );
      break;
    case 'product-category':
      return (
        <Fragment>
          <div className={classes.desktop}>
            <Image
              src={desktop}
              width={categoryPage.desktop.width}
              height={categoryPage.desktop.height}
              loading="lazy"
            />
          </div>
          <div className={classes.tablet}>
            <Image
              src={tablet}
              width={categoryPage.tablet.width}
              height={categoryPage.tablet.height}
              loading="lazy"
            />
          </div>
          <div className={classes.mobile}>
            <Image
              src={mobile}
              width={categoryPage.mobile.width}
              height={categoryPage.mobile.height}
              loading="lazy"
            />
          </div>
        </Fragment>
      );
      break;
    case 'suggestions':
      return (
        <Fragment>
          <div className={classes.desktop}>
            <Image
              src={desktop}
              width={suggestionsPage.desktop.width}
              height={suggestionsPage.desktop.height}
              loading="lazy"
            />
          </div>
          <div className={classes.tablet}>
            <Image
              src={tablet}
              width={suggestionsPage.tablet.width}
              height={suggestionsPage.tablet.height}
              loading="lazy"
            />
          </div>
          <div className={classes.mobile}>
            <Image
              src={mobile}
              width={suggestionsPage.mobile.width}
              height={suggestionsPage.mobile.height}
              loading="lazy"
              objectFit="cover"
            />
          </div>
        </Fragment>
      );
  }
}

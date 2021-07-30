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
  return (
    <Fragment>
      <div className={classes.desktop}>
        <Image
          src={desktop}
          width={
            component === 'product'
              ? productPage.desktop.width
              : categoryPage.desktop.width
          }
          height={
            component === 'product'
              ? productPage.desktop.height
              : categoryPage.desktop.height
          }
          loading="lazy"
        />
      </div>
      <div className={classes.tablet}>
        <Image
          src={tablet}
          width={
            component === 'product'
              ? productPage.tablet.width
              : categoryPage.tablet.width
          }
          height={
            component === 'product'
              ? productPage.tablet.height
              : categoryPage.tablet.height
          }
          loading="lazy"
        />
      </div>
      <div className={classes.mobile}>
        <Image
          src={mobile}
          width={
            component === 'product'
              ? productPage.mobile.width
              : categoryPage.mobile.width
          }
          height={
            component === 'product'
              ? productPage.mobile.height
              : categoryPage.mobile.height
          }
          loading="lazy"
        />
      </div>
    </Fragment>
  );
}

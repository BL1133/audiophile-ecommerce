import { Fragment } from 'react';
import classes from './imageLoader.module.scss';
import Image from 'next/image';

export default function ImageLoader({ desktop, tablet, mobile }) {
  return (
    <Fragment>
      <div className={classes.desktop}>
        <Image src={desktop} width={540} height={560} loading="lazy" />
      </div>
      <div className={classes.tablet}>
        <Image src={tablet} width={1378} height={700} loading="lazy" />
      </div>
      <div className={classes.mobile}>
        <Image src={mobile} width={654} height={704} loading="lazy" />
      </div>
    </Fragment>
  );
}

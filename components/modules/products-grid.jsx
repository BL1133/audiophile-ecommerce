import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './products-grid.module.scss';

import Headphones from '../../assets/shared/desktop/image-headphones.png';
import Earphones from '../../assets/shared/desktop/image-earphones.png';
import Speakers from '../../assets/shared/desktop/image-speakers.png';
import Arrow from '../../assets/shared/desktop/icon-arrow-right.svg';

export default function ProductsGrid() {
  return (
    <div className="u-margin-b-s">
      <div className={classes.container}>
        <div className={classes.product}>
          <div className={classes.product__content}>
            <div className={classes['image-wrapper']}>
              <Image
                src={Headphones}
                layout="responsive"
                width={170}
                height={170}
                alt="headphones"
              />
            </div>
            <h6 className={classes.title}>Headphones</h6>
            <Link href="/">
              <a className={classes.link}>
                <p className="subtitle">SHOP</p>
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.322 1l5 5-5 5"
                    stroke="#D87D4A"
                    stroke-width="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.product}>
          <div className={classes.product__content}>
            <div className={classes['image-wrapper']}>
              <Image
                src={Speakers}
                width={170}
                height={175}
                layout="responsive"
                alt="speakers"
              />
            </div>
            <h6 className={classes.title}>Speakers</h6>
            <Link href="/">
              <a className={classes.link}>
                <p className="subtitle">SHOP</p>
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.322 1l5 5-5 5"
                    stroke="#D87D4A"
                    stroke-width="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.product}>
          <div className={classes.product__content}>
            <div className={classes['image-wrapper']}>
              <Image
                src={Earphones}
                width={230}
                height={200}
                layout="responsive"
                alt="earphones"
              />
            </div>
            <h6 className={classes.title}>Earphones</h6>
            <Link href="/">
              <a className={classes.link}>
                <p className="subtitle">SHOP</p>
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.322 1l5 5-5 5"
                    stroke="#D87D4A"
                    stroke-width="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

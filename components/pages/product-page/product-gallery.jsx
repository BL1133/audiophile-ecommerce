import classes from './product-gallery.module.scss';
import Image from 'next/image';

export default function ProductGallery({ product }) {
  return (
    <div className={`${classes.container} u-margin-b-m`}>
      <div className={`${classes.image} ${classes.img1}`}>
        <Image
          src={`/assets/product-${product.slug}/desktop/image-gallery-1.jpg`}
          width={445}
          height={280}
        />
      </div>
      <div className={`${classes.image} ${classes.img2}`}>
        <Image
          src={`/assets/product-${product.slug}/desktop/image-gallery-2.jpg`}
          width={445}
          height={280}
        />
      </div>
      <div className={`${classes.image} ${classes.img3}`}>
        <Image
          src={`/assets/product-${product.slug}/desktop/image-gallery-3.jpg`}
          layout="fill"
        />
      </div>
    </div>
  );
}

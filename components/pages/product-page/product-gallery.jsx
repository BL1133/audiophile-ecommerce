import classes from './product-gallery.module.scss';
import Image from 'next/image';

export default function ProductGallery({ img1, img2, img3 }) {
  return (
    <div className={`${classes.container} u-margin-b-l`}>
      <div className={`${classes.image} ${classes.img1}`}>
        <Image src={img1} width={445} height={280} />
      </div>
      <div className={`${classes.image} ${classes.img2}`}>
        <Image src={img2} width={445} height={280} />
      </div>
      <div className={`${classes.image} ${classes.img3}`}>
        <Image src={img3} layout="fill" />
      </div>
    </div>
  );
}

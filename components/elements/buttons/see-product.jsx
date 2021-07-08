import classes from './see-product.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export default function SeeProduct({ orange, black, clear, url }) {
  return (
    <Link href={url}>
      <a
        className={classNames(classes.btn, {
          [`${classes.orange}`]: orange,
          [`${classes.black}`]: black,
          [`${classes.clear}`]: clear,
        })}
      >
        See Product
      </a>
    </Link>
  );
}

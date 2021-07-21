import classes from './navigation.module.scss';
import Link from 'next/link';

export default function Navigation({ layout }) {
  if (layout !== 'footer') {
    return (
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={classes.item}>
            <Link href="/products/headphones">Headphones</Link>
          </li>
          <li className={classes.item}>
            <Link href="/products/speakers">Speakers</Link>
          </li>
          <li className={classes.item}>
            <Link href="/products/earphones">Earphones</Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={classes.nav}>
        <ul className={classes['list--footer']}>
          <li className={`${classes['item--footer']} ${classes.item}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${classes['item--footer']} ${classes.item}`}>
            <Link href="/products/headphones">Headphones</Link>
          </li>
          <li className={`${classes['item--footer']} ${classes.item}`}>
            <Link href="/products/speakers">Speakers</Link>
          </li>
          <li className={`${classes['item--footer']} ${classes.item}`}>
            <Link href="/products/earphones">Earphones</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

import classes from './navigation.module.scss';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={classes.item}>
          <Link href="/">Headphones</Link>
        </li>
        <li className={classes.item}>
          <Link href="/">Speakers</Link>
        </li>
        <li className={classes.item}>
          <Link href="/">Earphones</Link>
        </li>
      </ul>
    </nav>
  );
}

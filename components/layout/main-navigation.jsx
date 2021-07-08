import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';
import classes from './main-navigation.module.scss';
import Navigation from '../modules/navigation';

function MainNavigation() {
  return (
    <div className={classes.container}>
      <div className={`u-margin-lr ${classes['header--container']}`}>
        <div className={`${classes.header}`}>
          <Image src={Logo} alt="logo" />
          <Navigation />
          <Image src={Cart} />
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;

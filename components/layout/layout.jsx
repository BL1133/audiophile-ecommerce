import MainNavigation from './main-navigation';
import Footer from './footer';
import { useRouter } from 'next/router';
import Cart from '../../components/modules/cart';

function Layout(props) {
  const router = useRouter();

  return (
    <div className={router.pathname === '/checkout' && 'checkoutBG'}>
      <MainNavigation />
      <Cart />
      <main className="u-margin-lr">{props.children}</main>
      <footer className="u-bgc-b">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;

import MainNavigation from './main-navigation';
import Footer from './footer';
import { useRouter } from 'next/router';

function Layout(props) {
  const router = useRouter();

  return (
    <div className={router.pathname === '/checkout' && 'checkoutBG'}>
      <MainNavigation />
      <main className="u-margin-lr">{props.children}</main>
      <footer className="u-bgc-b">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;

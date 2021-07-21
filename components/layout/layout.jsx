import { Fragment } from 'react';
import MainNavigation from './main-navigation';
import Footer from './footer';

function Layout(props) {
  return (
    <Fragment>
      <nav>
        <MainNavigation />
      </nav>
      <main className="u-margin-lr">{props.children}</main>
      <footer className="u-bgc-b">
        <Footer />
      </footer>
    </Fragment>
  );
}

export default Layout;

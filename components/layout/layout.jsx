import { Fragment } from 'react';
import MainNavigation from './main-navigation';
import Footer from './footer';

function Layout(props) {
  return (
    <Fragment>
      <header>
        <MainNavigation />
      </header>
      <main className="u-margin-lr">{props.children}</main>
      <footer className="u-margin-lr">
        <Footer />
      </footer>
    </Fragment>
  );
}

export default Layout;

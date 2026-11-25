import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
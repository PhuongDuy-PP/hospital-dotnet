import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SvgSprite from '../SvgSprite';

const Layout = ({ children }) => {
  return (
    <>
      <SvgSprite />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout; 
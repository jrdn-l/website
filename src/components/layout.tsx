import Footer from './footer';
import Header from './header';
import React from 'react';

export type Layout<> = {
  children: React.ReactNode;
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
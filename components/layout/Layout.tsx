import React, { ReactNode } from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer';

type LayoutProps = {
    children: ReactNode;
  };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
        <Header/>
        <div className='main-content m-auto'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
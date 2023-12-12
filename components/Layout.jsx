import React, { useEffect } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://dev.biznius.ai/static/chat.js";
    script.onload = () => {
      initializeChatWidget({
        token: "da1b5880-431c-4c5a-a",
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="layout">
      <Head>
        <title>BizDelicious</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout;

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

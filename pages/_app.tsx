import 'aos/dist/aos.css';
import '../styles/globals.scss';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import AOS from 'aos';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import Loader from '@/components/modules/Loader';
import Layout from '@/components/layout/Layout';
import { CartProvider } from '@/context/CartContext';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const pagesWithSkeleton = ['/menu', '/categories'];

  useEffect(() => {
    const handleStart = (url: string) => {
      if (!pagesWithSkeleton.includes(url)) {
        setLoading(true);
      }
    };

    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router, pagesWithSkeleton]); // اضافه کردن pagesWithSkeleton به وابستگی‌های useEffect

  return (
      <CartProvider>
        <Layout>
          {loading && <Loader />}
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
  );
};

export default App;

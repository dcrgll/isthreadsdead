import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="isthreadsdeadyet.com">
      <Script async src="https://js.stripe.com/v3/buy-button.js" />
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

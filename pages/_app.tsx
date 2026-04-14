import '@/pages/globals.css';
import type { AppProps } from 'next/app';
import '../reacbits/ProfileCard/ProfileCard.css';
import '../reacbits/ShinyText/ShinyText.css';
import '../reacbits/ElectricBorder/ElectricBorder.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

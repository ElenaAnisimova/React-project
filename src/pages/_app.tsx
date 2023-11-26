import Layout from '../components/Layout';
import type { AppProps } from "next/app";
import { wrapper } from '../ulits/states/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp);
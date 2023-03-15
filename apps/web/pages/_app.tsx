import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';
import { apiGateway } from '../server/gateway';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Parkark</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default apiGateway.withTRPC(CustomApp);

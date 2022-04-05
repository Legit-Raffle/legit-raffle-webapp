import '../styles/globals.css'
import { Rinkeby, DAppProvider } from '@usedapp/core';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Head from 'next/head'

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: process.env.NEXT_PUBLIC_ALCHEMY_HTTP,
  },
}

function MyApp({ Component, pageProps }) {

  return(
      <DAppProvider config={config}>
            <Head>
              <title>legit</title>
              <meta name="legit raffle" content="verifiable onchain raffle" />
              <link rel="icon" href="/check-mark-button_2705.png" />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
      </DAppProvider>
  ) 
}

export default MyApp

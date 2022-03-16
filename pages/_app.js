import '../styles/globals.css'
import { Rinkeby, DAppProvider } from '@usedapp/core';
import styles from '../styles/Home.module.css';
import navbar from './components/Navbar';

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: process.env.NEXT_PUBLIC_ALCHEMY_HTTP,
  },
}

function MyApp({ Component, pageProps }) {

  return(
    <DAppProvider config={config}>
          <Component {...pageProps} />
    </DAppProvider>
  ) 
}

export default MyApp

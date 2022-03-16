import '../styles/globals.css'
import { Rinkeby, DAppProvider } from '@usedapp/core';
import styles from '../styles/Home.module.css'
import { useEthers, useEtherBalance } from '@usedapp/core'
import navbar from './components/Navbar';

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: process.env.NEXT_PUBLIC_ALCHEMY_HTTP,
  },
}

function MyApp({ Component, pageProps }) {
  const { activateBrowserWallet, deactivate, account } = useEthers()

  return(
    <DAppProvider>
          <Component {...pageProps} />
    </DAppProvider>
  ) 
}

export default MyApp

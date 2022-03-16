import '../styles/globals.css'
import { Rinkeby, DAppProvider } from '@usedapp/core';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: process.env.NEXT_PUBLIC_ALCHEMY_HTTP,
  },
}

function MyApp({ Component, pageProps }) {
  return(
    <DAppProvider>
      <div>
        <nav className="bg-white px-10 py-5">
          <p className="font-bold text-4xl text-green-600">legit✅</p>
          <div className="flex mt-4">
            <Link href="/">
              <a className="block mr-6 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 font-bold hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0">
                home
              </a>
            </Link>
            <Link href="/create">
              <a className="block mr-6 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 font-bold hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0">
                create raffle
              </a>
            </Link>
          </div>
        </nav>
        <Component {...pageProps} />
        <footer className={styles.footer}>
          built with ❤️ by @gm_johans, @taipeicity_eth, and @therealjfrantz
        </footer>
      </div>
    </DAppProvider>
  ) 
}

export default MyApp

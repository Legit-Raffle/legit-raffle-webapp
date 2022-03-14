import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return(
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
  </div>
  ) 
}

export default MyApp

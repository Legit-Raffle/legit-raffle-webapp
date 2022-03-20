import React from 'react'
import { useEthers, useEtherBalance } from '@usedapp/core'
import Link from 'next/link'

const navbar = () => {
    const { activateBrowserWallet, deactivate, account } = useEthers()

  return (
    <nav className="bg-white px-10 py-5">
        <p className="font-bold text-4xl text-green-600">legit✅</p>
        <div className="container flex flex-row justify-between">
        <div className="my-3 flex flex-row">
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
            <Link href="/raffle">
            <a className="block mr-6 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 font-bold hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0">
                my raffle
            </a>
            </Link>
        </div>
        {!account && 
                    <button
                    class="font-bold text-green-700 bg-green-200 hover:bg-green-300 px-4 py-2 rounded-full"
                    onClick={() => activateBrowserWallet()}>connect wallet</button>
        }
        {account && 
                    <button
                    class="font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full"
                    onClick={() => deactivate()}>disconnect wallet</button>
        }
        </div>
    </nav>
    )
}

export default navbar
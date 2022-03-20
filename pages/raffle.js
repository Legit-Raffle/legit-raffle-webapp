import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useRouter } from 'next/router'
import { useEthers, useEtherBalance, useContractFunction } from '@usedapp/core'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const raffle = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();

  return (
    <div class=" min-w-screen min-h-screen">
        <Head>
            <title>legit</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <main class="bg-slate-50 min-w-screen min-h-screen">
          <div className="flex justify-center">
            <div className="w-1/2 flex flex-col pb-12">
              <h2 className='mt-10 font-bold text-5xl'>my raffle</h2>
              <input
                placeholder="raffle contract address"
                className="mt-8 border rounded p-4"
                onChange={e => setTokenAddress(e.target.value)}
              />
              <input
                placeholder="list of raffle entrees"
                className="mt-8 border rounded p-4"
                onChange={e => setTokenId(e.target.value)}
              />
              <button className="font-bold mt-4 bg-green-500 text-white rounded p-4 shadow-lg hover:bg-green-700">
                draw winner
              </button>
              <button className="font-bold mt-4 bg-green-500 text-white rounded p-4 shadow-lg hover:bg-green-700">
                claim prize
              </button>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
  )
}

export default raffle
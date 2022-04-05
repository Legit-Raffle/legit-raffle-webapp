import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { useEthers, useEtherBalance } from '@usedapp/core'
import Card from '../components/Card'
import { factoryContractAddress, raffleContractAddress, raffleFactoryABI, raffleABI } from '../utils/contract-utils'
import { ethers } from "ethers"

const dashboard = () => {
  useEffect(() => {
    getMyRaffles();
    console.log(account)
  },[]);

  const { activateBrowserWallet, deactivate, account } = useEthers()
  const [myRaffles, setMyRaffles] = useState([]);
  const [loaded, isLoaded] = useState("not-loaded");

  const getMyRaffles = async() =>{
    console.log(loaded)
    isLoaded("not-loaded");
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const raffleFactory = new ethers.Contract(factoryContractAddress, raffleFactoryABI, signer);

        const numRaffles = await raffleFactory.vaultCount();
        let newRaffles = []
        for (let i = 0; i < numRaffles; i++) {
          const raffleAddr = await raffleFactory.vaults(i);
          const raffle = new ethers.Contract(
              raffleAddr, raffleABI, provider
          );
          const admin = await raffle.admin();
          if(admin == account){
            newRaffles = [...newRaffles, raffle];
          }
        }
        console.log(newRaffles)
        const items = await Promise.all(newRaffles.map(async i =>{
          const name = await i.name();
          const address = await i.address;
          const tokenAddress = await i.token();
          let item = {
            name: name,
            address: address,
            tokenAddress: tokenAddress
          }
          return item
        }))
        setMyRaffles(items);
        console.log(myRaffles[0].name);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
    isLoaded("loaded");
    console.log(loaded)
  }

  // if(loaded === 'not-loaded' && !myRaffles.length){
  //   return(<h1>Loading...</h1>)
  // } else{
  //   return (
  //     <div className="bg-slate-50 min-w-screen min-h-screen">
  //       <main className="bg-slate-50 min-w-screen min-h-screen">
  //         {loaded? <h1>loaded</h1>: <h1>loading</h1>} 
  //           <div >
  //             <button onClick={getMyRaffles}>
  //               get my raffles
  //             </button>
  //             <div className="flex justify-center">
  //               <h2>raffles made</h2>
  //               {
  //                 myRaffles.map((raffle, i)=>{
  //                   <div key={i}>{raffle.name}</div>
  //                 })
  //               }
  //             </div> 
  //           </div>   
  //       </main>
  //   </div>
  //       )
  // } 
  if (loaded === 'loaded' && !myRaffles.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            myRaffles.map((raffle, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold">{raffle.name}</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{raffle.address}</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{raffle.tokenAddress} ETH</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )

      }
export default dashboard
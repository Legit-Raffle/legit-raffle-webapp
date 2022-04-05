import React from 'react'
import raffleAbi from "../utils/Raffle.json"
import raffleFactoryAbi from "../utils/RaffleFactory.json"

export const factoryContractAddress = "0x9CbB3A687453ad3b2a52C3BDB8De6EC2326BEdED";
export const raffleContractAddress = "0x29d3A0366071dA295a63F8bc9E2cD3Fc94093De6";
export const raffleFactoryABI = raffleFactoryAbi.abi;
export const raffleABI = raffleAbi.abi;


export const create = async() => {
    try {
        const { ethereum } = window;
        if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const raffleContract = new ethers.Contract(factoryContractAddress, contractABI, signer);

        console.log("waiting for nft approval");
        const nftContract = new ethers.Contract(tokenAddress, nftIface, signer);
        const nftApprove = await nftContract.approve(factoryContractAddress, tokenId, {gasLimit: 300000});
        console.log("Mining...", nftApprove.hash);

        await nftApprove.wait();
        console.log("Mined -- ", nftApprove.hash);

        const raffleCreate = await raffleContract.createRaffle(tokenAddress, tokenId, raffleName, {gasLimit: 300000});
        console.log("Mining...", raffleCreate.hash);

        await raffleCreate.wait();
        console.log("Mined -- ", raffleCreate.hash);

        } else {
        console.log("Ethereum object doesn't exist!");
        }
    } catch (error) {
        console.log(error);
    }
}

export const finalize = async() => {
    try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const raffleContract = new ethers.Contract(raffleContractAddress, contractABI, signer);
  
          const raffleFinalize = await raffleContract.finalize(merkleRoot(list), listSize, {gasLimit: 300000});
          console.log("Mining...", raffleFinalize.hash);
  
          await raffleFinalize.wait();
          console.log("Mined -- ", raffleFinalize.hash);
  
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error)
      }
}

export const draw = async() => {
    try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const raffleContract = new ethers.Contract(raffleContractAddress, contractABI, signer);
  
          const raffleDraw = await raffleContract.draw({gasLimit: 300000});
          console.log("Mining...", raffleDraw.hash);
  
          await raffleDraw.wait();
          console.log("Mined -- ", raffleDraw.hash);
  
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error);
      }
}

export const claim = async() => {
    try {
        const { ethereum } = window;
        if (ethereum) {
          console.log(list)
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const raffleContract = new ethers.Contract(raffleContractAddress, contractABI, signer);
  
          const raffleClaim = await raffleContract.claim(account, winnerIdx, merkleProofForIdx(list, winnerIdx), {gasLimit: 300000});
          console.log("Mining...", raffleClaim.hash);
  
          await raffleClaim.wait();
          console.log("Mined -- ", raffleClaim.hash);
  
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error)
      }
}
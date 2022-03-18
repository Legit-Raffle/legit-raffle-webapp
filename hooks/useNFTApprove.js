import React from 'react'
import { 
    useEthers, 
    useContractCall,
    useContractFunction,

 } from "@usedapp/core";
import { useEffect, useState } from "react";
import { ethers }from 'ethers'

const useNFTApprove = (token, id) => {
    const { library } = useEthers()
    const nftIface = new ethers.utils.Interface([
        'function approve(address to, uint256 tokenId) external',
        'function getApproved(uint256 tokenId) external view returns (address operator)',
    ])
    const nftContract = new ethers.Contract(token, nftIface, library)
    const result = useContractCall( library && {
        abi: nftIface,
        address: token,
        method: 'getApproved',
        args: [id]
    });
    const approvedAddr = result ? result[0] : null

    const {state, send, events} = useContractFunction(
        nftContract, 'approve');
    return {
        approved: approvedAddr && 
            approvedAddr.toLowerCase() 
            === FlashmintVaultFactoryAddress.toLowerCase(),
        approve: () => send(FlashmintVaultFactoryAddress, id),
        approveTxState: state,
        approveEvents: events
    }
}

export default useNFTApprove
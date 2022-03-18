import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import axios from 'axios'
import Web3Modal from "web3modal"
import navbar from '../components/navbar'
import { useRouter } from 'next/router'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const raffle = () => {
  return (
    <div>raffle</div>
  )
}

export default raffle
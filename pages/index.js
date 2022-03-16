import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './Dashboard'
export default function Home() {


  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </div>
  )
}

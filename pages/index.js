import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import navbar from './components/navbar'
export default function Home() {
  console.log(process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY)
  return (
    <div class="bg-slate-50 min-w-screen min-h-screen">
      <Head>
          <title>legit</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="bg-slate-50 min-w-screen min-h-screen">

      </main>


      <footer className={styles.footer}>
        built by johans.eth and taipeicity.eth
      </footer>
  </div>
  )
}

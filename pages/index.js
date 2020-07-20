import Head from 'next/head'
import TopBar from '../components/TopBar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar></TopBar>
    </div>)
}

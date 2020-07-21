import Head from 'next/head'
import TopBar from '../components/TopBar'
// import Link from 'next/Link'
import homeStyles from '../styles/Home.module.css'
import BriefCard from '../components/BriefCard'
import ArticleCard from '../components/article/ArticleCard'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
         <TopBar></TopBar>
      </header>
      <main>
        <div className={homeStyles.topStory}>
            <div className={homeStyles.mainColumn}>
                <nav className={homeStyles.topTabs}>
                  <a>前端</a>
                  <a>Node.js</a>
                </nav>
                <div className={homeStyles.topContent}>
                  <ArticleCard></ArticleCard>
                </div>
            </div>
            <div className={homeStyles.sideBar}>
                <BriefCard></BriefCard>
            </div>
         </div>
      </main>
    </div>)
}

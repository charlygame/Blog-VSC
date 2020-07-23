import TopBar from "./TopBar";
import Head from 'next/head';
import BriefCard from './BriefCard';
import layoutStyles from '../../styles/Layout.module.css';
// 公共组件
export default function Layout({ children }) {

    return <div className="container">
        <Head>
            <title>我的站点</title>
            <link ref="icon" href="/favicon.ico"/>
        </Head>
        <header>
            <TopBar></TopBar>
        </header>
        <main>
            <div className={layoutStyles.topStory}>
                <div className={layoutStyles.mainColumn}>
                    {children}
                </div>
                <div className={layoutStyles.sideBar}>
                    <BriefCard></BriefCard>
                </div>
            </div>
        </main>
    </div>
}
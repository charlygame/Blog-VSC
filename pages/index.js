import Head from 'next/head'
import TopBar from '../components/TopBar'
import Layout from '../components/Layout'
import ArticleCard from '../components/article/ArticleCard'
export default function Home() {
  return (
    <Layout>
       <ArticleCard href="/article/[id].js"></ArticleCard>
    </Layout>
  )
}

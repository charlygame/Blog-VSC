
import articleStyles from '../../styles/ArticleCard.module.css'
import ArticleSocialBar from './ArticleSocialBar';
import Link from 'next/link';

export default function ArticleCard () {

    return <div className={articleStyles.articleCard}>
        <h3><Link href="article/[id].js">这是文章的标题</Link></h3>
        <div className='richContent'>
            <div className="richContentCover">``
            </div>
            <div className="richContentInner">
                <span>
                    这里是文章内容
                </span>
                <span className={articleStyles.readAll}>阅读全文</span>
            </div>
        </div>
        <ArticleSocialBar></ArticleSocialBar>
    </div>
}
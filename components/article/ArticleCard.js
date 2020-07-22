
import articleStyles from '../../styles/ArticleCard.module.css'
import ArticleSocialBar from './ArticleSocialBar';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ArticleCard ({href}) {

    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    }

    return <div className={articleStyles.articleCard}>
        <div className={articleStyles.touchArea} onClick ={handleClick}>
            <h3>这是文章的标题</h3>
            <div className='richContent'>
                <div className="richContentCover">
                </div>
                <div className="richContentInner">
                    <span>
                        这里是文章内容
                    </span>
                    <span className={articleStyles.readAll}>阅读全文</span>
                </div>
            </div>
        </div>
        <ArticleSocialBar></ArticleSocialBar>
    </div>
}
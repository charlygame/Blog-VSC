import {Input, Button} from 'antd'
import Link from 'next/link'
const Search = Input.Search;
import topBarStyle from '../../styles/TopBar.module.css';
import useSWR from 'swr';
import * as fetchers from '../utils/fetchers';
export default function TopBar() {

    let onClick = () => {
        fetchers.createArticle({
            title: '测试文章',
            content: '这是文章内容',
            tags: [1,2,3]
        });
    }

    return <div className={topBarStyle.topBar}>
        <div className={topBarStyle.siteName}>
            <h1>发呆港</h1>
        </div>
        <ul className= {topBarStyle.siteMenu}>
            <li><Link href="/"><a>首页</a></Link></li>
            <li><a>归档</a></li>
            <li><a>留言板</a></li>
        </ul>
        <div>
            <Search></Search>
        </div>
        <div className={topBarStyle.login}>
            <Button type="primary" onClick={onClick}>登录</Button>
        </div>
    </div>
}
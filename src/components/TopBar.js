import {Input, Button} from 'antd'
import Link from 'next/link'
const Search = Input.Search;
import topBarStyle from '../../styles/TopBar.module.css';
import useSWR from 'swr';
import * as fetchers from '../utils/fetchers';
export default function TopBar() {

    const onClick = () => {
        console.log('执行登录命令');
    }

    return <div className={topBarStyle.topBar}>
        <div className={topBarStyle.siteName}>
            <h1>我的博客</h1>
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
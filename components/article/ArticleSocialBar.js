
import {MessageOutlined, LikeOutlined, ShareAltOutlined} from "@ant-design/icons"
import articleStyles from '../../styles/ArticleCard.module.css'

export default function ArticleSocialBar () {
    return <div className={articleStyles.articleSocialBar}>
                <div>
                    <MessageOutlined />
                    <span>100条评论</span>
                </div> 
                <div>
                    <LikeOutlined />
                    <span>100个点赞</span>
                </div>
                <div>
                    <ShareAltOutlined />
                </div>
        </div>
}
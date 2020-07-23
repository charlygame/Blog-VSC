import {WechatOutlined, SendOutlined, GithubOutlined} from '@ant-design/icons'
import socialStyles from '../../styles/SocialTools.module.css'

export default function SocialTools() {
    return <div className={socialStyles.socialTools}>
        <div >
            <WechatOutlined />
        </div>
        <div>
            <SendOutlined />
        </div>
        <div>
            <GithubOutlined />
        </div>
    </div>
}
import briefCardStyle from '../styles/BriefCard.module.css';
import SocialTools from './SocialTools';

export default function BriefCard () {
    return <div className={briefCardStyle.briefCard}>
        <div className={briefCardStyle.userInfo}>
            <div className={briefCardStyle.iconWrap}>
                <img src="images/icon.jpeg"/>
            </div>
            <h2>charly</h2>
        </div>
        <div className={briefCardStyle.achievementInfo}>
            <div>
                <p>100</p>
                <p>文章</p>
            </div>
            <div>
                <p>100</p>
                <p>点赞</p>
            </div>
            <div>
                <p>10</p>
                <p>留言</p>
            </div>
        </div>
        <SocialTools></SocialTools>
    </div>
}
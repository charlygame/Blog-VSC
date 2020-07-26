import axios from 'axios';
import config from '../../config';

const Api = {
    article: 'api/article' 
}

/**
 * 创建文章
 * @param {*} data 
 * data {
 *   title: string,
 *   content: string,
 *   tags: []
 * }
 */
export function createArticle(data) {
    return axios.post(Api.article, data);
}

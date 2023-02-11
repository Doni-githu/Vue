import axios from "./axios";

const ArticlesService = {
    articles() {
        return axios.get('/articles')
    },
    articlesDetail(slug) {
        return axios.get(`/articles/${slug}`)
    }
}

export default ArticlesService
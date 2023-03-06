import axios from "./axios";

const ArticlesService = {
    articles() {
        return axios.get('/articles')
    },
    articlesDetail(slug) {
        return axios.get(`/articles/${slug}`)
    },
    createArticle(article) {
        return axios.post(`/articles`, { article })
    },
    deleteArticle(slug) {
        return axios.delete(`/articles/${slug}`)
    },
    updatedArticle(article, slug) {
        return axios.put(`/articles/${slug}`, { article })
    },
}

export default ArticlesService
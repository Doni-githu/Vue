import axios from "./axios";

const ArticlesService = {
    articles() {
        return axios.get('/articles')
    }
}

export default ArticlesService
import ArticlesService from "../service/articles"

const state = {
    data: null,
    isLoading: false,
    error: null,
    articlesDetail: null,
}

const mutations = {
    getArticlesStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getArticlesSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    getArticlesFailure(state) {
        state.isLoading = false
    },
    getArticlesDetailStart(state) {
        state.isLoading = true
        state.articlesDetail = null
        state.error = null
    },
    getArticlesDetailSuccess(state, payload) {
        state.isLoading = false
        state.articlesDetail = payload
    },
    getArticlesDetailFailure(state) {
        state.isLoading = false
    },
}

const actions = {
    articles(context) {
        return new Promise((resolve) => {
            context.commit('getArticlesStart')
            ArticlesService.articles().then(response => {
                context.commit("getArticlesSuccess", response.data.articles)
                console.log('Response', response);
                resolve(response.data.articles)
            }).catch((e) => {
                context.commit('getArticlesFailure')
            })
        })
    },
    articlesDetail(context, slug) {
        return new Promise((resolve, reject) => {
            context.commit('getArticlesDetailStart')
            ArticlesService.articlesDetail(slug)
                .then(response => { })
                .catch(() => { })
        })
    }
}


export default {
    state,
    mutations,
    actions
}
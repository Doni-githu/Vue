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
        state.articlesDetail = null
        state.error = null
    },
    getArticlesSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    Failure(state) {
        state.isLoading = false
    },
    getArticlesDetailStart(state) {
        state.isLoading = true
        state.data = null
        state.articlesDetail = null
        state.error = null
    },
    getArticlesDetailSuccess(state, payload) {
        state.isLoading = false
        state.articlesDetail = payload
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
            }).catch((err) => context.commit('Failure'))
        })
    },
    articlesDetail(context, slug) {
        return new Promise(resolve => {
            context.commit('getArticlesDetailStart')
            ArticlesService.articlesDetail(slug)
                .then(response => {
                    context.commit('getArticlesDetailSuccess', response.data.article)
                    resolve(response.data.article)
                })
                .catch((err) => {
                    alert(err.message)
                    context.commit('Failure')
                })
        })
    }
}


export default {
    state,
    mutations,
    actions
}
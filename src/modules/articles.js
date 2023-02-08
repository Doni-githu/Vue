import ArticlesService from "../service/articles"

const state = {
    data: null,
    isLoading: false,
    error: null
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
}

const actions = {
    articles(context) {
        return new Promise((resolve, reject) => {
            context.commit('getArticlesStart')
            ArticlesService.articles().then(response => {
                context.commit("getArticlesSuccess", response.data.articles)
                console.log(`Response ${response}`);
            }).catch(() => context.commit('getArticlesFailure'))
        })
    },
}


export default {
    state,
    mutations,
    actions
}
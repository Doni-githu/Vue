import ArticlesService from "../service/articles"

const state = {
    isLoading: false,
}

const mutations = {
    controlArticleStart(state) {
        state.isLoading = true
    },
    controlArticleSuccuss(state) {
        state.isLoading = false
    },
    controlArticleFailur(state) {
        state.isLoading = false
    }
}

const actions = {
    createArticle(context, article) {
        return new Promise((resolve, reject) => {
            context.commit('controlArticleStart')
            ArticlesService.createArticle(article).then(() => {
                context.commit('controlArticleSuccuss')
            }).catch(() => {
                context.commit('controlArticleFailur')
            })
        })
    },
    deleteAricle(context, slug) {
        return new Promise((resolve) => {
            context.commit('controlArticleStart')
            ArticlesService.deleteArticle(slug).then(() => {
                context.commit('controlArticleSuccuss')
            }).catch(() => {
                context.commit('controlArticleFailur')
            })
        })
    },
    updatehandeler(context, data, slug) {
        return new Promise(resolve => {
            context.commit('controlArticleStart')
            ArticlesService.updatedArticle(data.article, data.slug)
                .then(() => {
                    context.commit('controlArticleSuccuss')
                    resolve()
                }).catch(() => {
                    context.commit('controlArticleFailur')
                })
        })
    }
}


export default {
    state, mutations, actions
}
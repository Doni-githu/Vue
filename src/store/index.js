import { createStore } from 'vuex'
import auth from "../modules/auth.js"
import articles from '../modules/articles.js'
import contol from '../modules/contol.js'
const store = createStore({
    state: {},
    mutations: {},
    actions: {}, 
    modules: { auth, articles, contol },
})

export default store
import { createStore } from 'vuex'
import auth from "../modules/auth.js"
import articles from '../modules/articles.js'
const store = createStore({
    state: {},
    mutations: {},
    actions: {}, 
    modules: { auth, articles },
})

export default store
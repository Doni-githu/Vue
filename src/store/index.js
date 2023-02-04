import { createStore } from 'vuex'
import auth from "../modules/auth.js"
const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: { auth },
})

export default store
import AuthService from "../service/auth"
import { setItem, getItem } from "../helpers/persisteneStorage"
const store = {
    isLoading: false,
    user: null,
    errors: null,
}

const mutations = {
    startRegister(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    starSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
    },
    starFailure(state, payload) {
        state.isLoading = false
        state.errors = payload
    },
}

const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('startRegister')
            AuthService.register(user).then(response => {
                context.commit('starSuccess', response.data.user)
                setItem("token", response.data.user.token)
                resolve(response.data.user)
            }).catch(err => {
                context.commit('starFailure', err.response.data)
                reject(err.response.data)
            })
        })
    }
}

export default {
    store,
    mutations,
    actions
}
import AuthService from "../service/auth"
import { setItem } from "../helpers/persisteneStorage"
const store = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggenIn: null
}

const mutations = {
    startRegister(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggenIn = null
    },
    starSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggenIn = true
    },
    starFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
        state.isLoggenIn = false
    },
    startLogin(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggenIn = null
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggenIn = true
    },
    loginFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
        state.isLoggenIn = false
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
                reject(err)
            })
        })
    },
    login(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('startLogin')
            AuthService.login(user)
                .then(response => {
                    context.commit('loginSuccess', response.data.user)
                    setItem("token", response.data.user.token)
                    resolve(response.data.user)
                }).catch(err => {
                    context.commit('loginFailure', err.response.data)
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
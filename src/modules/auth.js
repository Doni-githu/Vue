import AuthService from "../service/auth"
import { removeItem, setItem } from "../helpers/persisteneStorage"
import { gettersTypes } from "./types"
const store = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggenIn: false
}

const getters = {
    [gettersTypes.user]: state => {
        return state.user
    },
    [gettersTypes.isLoggedIn]: state => {
        return Boolean(state.isLoggedIn)
    },
    [gettersTypes.isAnonymous]: state => {
        return state.isLoggedIn === false
    }
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
    CurrentUserStart(state) {
        state.isLoading = true
    },
    CurrentUserSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    CurrentUserFailure(state) {
        state.isLoading = false
        state.user = null
        state.isLoggedIn = false
    },
    logout(state) {
        state.isLoggedIn = false
        state.user = null
    }
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
    },
    getUser(context) {
        return new Promise(resolve => {
            context.commit('CurrentUserStart')
            AuthService.getUser().then(response => {
                context.commit('CurrentUserSuccess', response.data.user)
                resolve(response.data.user)
            }).catch(e => {
                console.log(e);
                context.commit('CurrentUserFailure')
            })
        })
    },
    logout(context) {
        context.commit('logout')
        removeItem('token')
    }
}

export default {
    store,
    mutations,
    actions,
    getters,
}
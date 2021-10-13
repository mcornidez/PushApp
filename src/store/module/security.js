import {UserApi} from "../../../api/user";
import {Api} from "../../../api/api";

const SECURITY_TOKEN_KEY = 'security-token'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
        dummyVar: false
    },
    getters: {
        isLoggedIn(state) {
            return state.token != null
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, token) {
            state.token = token
        },
        clearUser(state){
            state.user = null
        }
    },
    actions: {
        initialize({commit}) {
            const token = localStorage.getItem(SECURITY_TOKEN_KEY)
            if (token) {
                commit('setToken', token)
                Api.token = token
            }
        },
        updateDummyVar(){
            this.dummyVar = !this.dummyVar;
        },
        updateToken({commit}, {token, rememberMe}) {
            if (rememberMe)
                localStorage.setItem(SECURITY_TOKEN_KEY, token)
            commit('setToken', token)
            Api.token = token
        },
        removeToken({commit}) {
            localStorage.removeItem(SECURITY_TOKEN_KEY)
            commit('setToken', null)
            Api.token = null
        },
        async addUser({dispatch}, credentials){
            dispatch('updateDummyVar')
            await UserApi.add(credentials);
        },
        async modifyUser({commit}, credentials){
            const result = await UserApi.update(credentials);
            commit('setUser', result);
        },
        async verifyEmail({dispatch}, credentials){
            dispatch('updateDummyVar'); //Esta a modo dummy esto, necesitamos entender porque llamad a aparametro
            //estado cuando no lo declaramos (por sos el llamado sin sentido)
            await UserApi.verify(credentials);
        },
        async login({dispatch}, {credentials, rememberMe}) {
            const result = await UserApi.login(credentials)
            dispatch('updateToken', { token: result.token, rememberMe })
        },
        async logout({commit}) {
            await UserApi.logout()
            commit("clearUser")
        },
        async getCurrentUser({state, commit}) {
            if (state.user)
                return state.user

            const result = await UserApi.get()
            commit('setUser', result)
        }
    },
}
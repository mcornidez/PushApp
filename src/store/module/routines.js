import {RoutinesApi} from "../../../api/routines";
import {UserApi} from "../../../api/user";

export default {
    namespaced: true,
    state: {
        routines: [],
        currentRoutine: null
    },
    getters: {
        findIndex(state) {
            return (routine) => {
                return state.routines.findIndex(item => item.id === routine.id)
            }
        },
    },
    mutations: {
        push(state, routine) {
            state.items.push(routine)
        },
        replace(state, index, sport) {
            state.items[index] = sport
        },
        splice(state, index) {
            state.items.splice(index, 1)
        },
        replaceAll(state, sports) {
            state.items = sports
        },
        updateCurrentRoutine(state, currentRoutine) {
            state.currentRoutine = currentRoutine
        }
    },
    actions: {
        async createRoutine({getters, commit}, routine) {
            const result = await RoutinesApi.add(routine)
            if (!getters.findIndex(result))
                commit('push', result)
            commit('updateCurrentRoutine', result)
            return result
        },
        async setActiveRoutine({commit}, routine){
            commit('updateCurrentRoutine', routine);
        },
        async modify({getters, commit}, routine) {
            const result = await RoutinesApi.modify(routine)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, routine) {
            await RoutinesApi.delete(routine.id)
            const index = getters.findIndex(routine)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, routine) {
            const index = getters.findIndex(routine)
            if (index >= 0)
                return state.items[index]

            const result = await RoutinesApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await RoutinesApi.getAll(controller)
            commit('replaceAll', result)
            return result
        },
        async retrieveUserRoutines({commit}, userID){
            const result = await UserApi.retrieveUserRoutines(userID)
            commit('replaceAll', result)
            return result
        }
    },
}

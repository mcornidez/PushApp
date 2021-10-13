import {RoutinesApi} from "../../../api/routines";


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
    },
}
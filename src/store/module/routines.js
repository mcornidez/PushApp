import {RoutinesApi} from "../../../api/routines";


export default {
    namespaced: true,
    state: {
        routines: []
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
    },
    actions: {
        async createRoutine({getters, commit}, routine) {
            const result = await RoutinesApi.add(routine)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
    },
}
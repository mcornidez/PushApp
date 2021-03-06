import {RoutinesCycleApi} from "../../../api/routinesCycle";


export default {
    namespaced: true,
    state: {
        currentRoutineCycle: null,
        currentCycles: [],
    },
    mutations: {
        currentRoutineCycle(state, id) {
            state.currentRoutineCycle = id
        },
        updateCurrentCycles(state, routineCycles) {
            state.currentCycles = routineCycles
        }
    },
    actions: {
        async createRoutineCycle({commit}, routineCycle) {
            const result = await RoutinesCycleApi.add(routineCycle.routineId, routineCycle);
            commit();
            return result;
        },
        async getAllCyclesFromRoutine({commit}, routineId) {
            const result = await RoutinesCycleApi.getAll(routineId)
            commit('updateCurrentCycles', result.content);
            return result;
        },

    },
}
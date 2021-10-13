import {RoutinesCycleApi} from "../../../api/routinesCycle";

export default {
    namespaced: true,
    state: {
        currentRoutineCycleId: null
    },
    mutations: {
        currentRoutineCycleId(id) {
            this.currentRoutineCycleId = id
        }
    },
    actions: {
        async createRoutineCycle({commit}, routineCycle) {
            const result = await RoutinesCycleApi.add(routineCycle.routineId, routineCycle);
            commit('currentRoutineCycleId', result.id);
            return result;
        },
    },
}
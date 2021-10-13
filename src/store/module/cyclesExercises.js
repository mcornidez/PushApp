import {CycleExercisesApi} from "../../../api/cyclesExercises";

export default {
    namespaced: true,
    state: {
        currentCycleExercise: null
    },
    mutations: {
        updateCurrentCycleExercise(state, currentCycleExercise) {
            state.currentCycleExercise = currentCycleExercise
        }
    },
    actions: {
        async addCycleExercise({commit}, cycleExercise) {
            const result = await CycleExercisesApi.add(cycleExercise.cycleId, cycleExercise.exerciseId, cycleExercise);
            alert(JSON.stringify(result, null, 2));
            commit('updateCurrentCycleExercise', result);
            return result;
        },
    },
}
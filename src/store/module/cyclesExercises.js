import {CycleExercisesApi} from "../../../api/cyclesExercises";

export default {
    namespaced: true,
    state: {
        currentCycleExercise: null,
        exercisesFromCycle: [],
    },
    mutations: {
        updateCurrentCycleExercise(state, currentCycleExercise) {
            state.currentCycleExercise = currentCycleExercise
        },
        setExercisesFromCycle(state, exercisesFromCycle) {
            state.exercisesFromCycle = exercisesFromCycle;
        }
    },
    actions: {
        async addCycleExercise({commit}, cycleExercise) {
            const result = await CycleExercisesApi.add(cycleExercise.cycleId, cycleExercise.exerciseId, cycleExercise);
            commit('updateCurrentCycleExercise', result);
            return result;
        },
        async getAllExercisesFromCycle({commit}, cycleId) {
            const result = await CycleExercisesApi.getAll(cycleId);
            commit('setExercisesFromCycle', result.content);
            return result;
        },
    },
}
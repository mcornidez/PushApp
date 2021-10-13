import { Api } from './api.js'

export { CycleExercisesApi, CycleExercises }

class CycleExercisesApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/cycles${slug ? `/${slug}` : ''}`
    }
    static async add(cycleId, exerciseId, cycleExercise, controller) {
        return await Api.post(CycleExercisesApi.getUrl(`${cycleId}/exercises/${exerciseId}`), true, cycleExercise, controller)
    }
}
class CycleExercises {
    constructor(order, duration, repetitions, cycleId, exerciseId) {
        this.order = order;
        this.duration = duration;
        this.repetitions = repetitions;
        this.cycleId = cycleId;
        this.exerciseId = exerciseId;
    }
}
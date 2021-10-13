import { Api } from './api.js'

export { RoutinesCycleApi, RoutinesCycle }

class RoutinesCycleApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/routines${slug ? `/${slug}` : ''}`
    }
    static async add(routineId, routineCycle, controller) {
        return await Api.post(RoutinesCycleApi.getUrl(`${routineId}/cycles`), true, routineCycle, controller)
    }
}
class RoutinesCycle {
    constructor(name, detail, type, order, repetitions, routineId) {
        this.name =  name;
        this.detail = detail;
        this.type = type;
        this.order = order;
        this.repetitions = repetitions;
        this.routineId = routineId;
    }
}
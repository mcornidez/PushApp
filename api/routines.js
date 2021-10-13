import { Api } from './api.js'

export { RoutinesApi, Routine }

class RoutinesApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/routines${slug ? `/${slug}` : ''}`
    }
    static async add(routine, controller) {
        return await Api.post(RoutinesApi.getUrl(), true, routine, controller)
    }
    static async modify(routine, controller) {
        return await Api.put(RoutinesApi.getUrl(routine.id), true, routine, controller)
    }

    static async delete(id, controller) {
        return await Api.delete(RoutinesApi.getUrl(id), true, controller)
    }

    static async get(id, controller) {
        return await Api.get(RoutinesApi.getUrl(id),true,  controller)
    }

    static async getAll(controller) {
        return await Api.get(RoutinesApi.getUrl(), true, controller)
    }

}
class Routine {
    constructor(name, detail, isPublic, difficulty) {
        this.name = name;
        this.detail = detail;
        this.isPublic = isPublic;
        this.difficulty = difficulty;
    }
}
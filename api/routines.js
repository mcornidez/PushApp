import { Api } from './api.js'

export { RoutinesApi, Routine }

class RoutinesApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/routines${slug ? `/${slug}` : ''}`
    }
    static async add(routine, controller) {
        return await Api.post(RoutinesApi.getUrl(), true, routine, controller)
    }
}
class Routine {
    constructor(name, detail, isPublic, difficulty) {
        this.name =  name;
        this.detail = detail;
        this.isPublic = isPublic;
        this.difficulty = difficulty;
    }
}

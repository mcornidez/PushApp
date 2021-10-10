import { Api } from './api.js'

export { UserApi, Credentials }

class UserApi {
    static getUrl(slug) {
        return `${Api.baseUrl}/users${ slug ? `/${slug}` : ''}`
    }

    static async add(credentials, controller) {
        return await Api.post(UserApi.getUrl(), false, credentials, controller)
    }

    static async login(credentials, controller) {
        return await Api.post(UserApi.getUrl('login'), false, credentials, controller)
    }

    static async logout(controller) {
        await Api.post(UserApi.getUrl('logout'), true, controller)
    }

    static async get(controller) {
        return Api.get(UserApi.getUrl('current'), true, controller)
    }
}

class Credentials {
    constructor(username, password, email, sec_email) {
        this.username = username
        this.password = password
        this.email = email
        this.sec_email = sec_email
    }
}
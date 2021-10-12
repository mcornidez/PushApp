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
    static async verify(credentials, controller){
        return await Api.post(UserApi.getUrl('verify_email'), false, credentials, controller)
    }
}

export class Validation{
    constructor(mail, key) {
        this.email = mail
        this.code = key
    }
}

class Credentials {
    constructor(username, password, email) {
        this.username = username
        this.password = password
        this.email = email
    }
}

export class Credentials2{
    constructor(username, password, email, firstName, lastName, gender) {
        this.username = username
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.birthdate = 0
        this.email = email
        this.phone = '123456789' //No planeamos utilizar telefonos, pero es un parametro obligatorio en constructores
        this.avatarUrl = '.'
        this.metadata = null
    }
}

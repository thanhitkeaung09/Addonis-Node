import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserService from 'App/Services/UserService'

export default class UsersController {
  public async index({ request, response }) {
    return await new UserService().index(request, response)
  }

  public async delete({ request, response }: HttpContextContract) {
    const id = request.params().id
    return await new UserService().delete(id, response)
  }

  public async single({ request, response }) {
    const id = request.params().id
    return await new UserService().single(id, response)
  }

  public async update({ request, response }: HttpContextContract) {
    const user = await User.find(request.params().id)
    return new UserService().update(user, request, response)
  }

  public async create({ request, response }: HttpContextContract) {
    return new UserService().create(request, response)
  }
}

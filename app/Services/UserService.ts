// import type { HttpContextContract } from '@adonisjs/core/build/standalone'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class UserService {
  public async index(request, response) {
    const page = request.input('page', 1)
    const limit = 10
    const user = await Database.from('users').paginate(page, limit)
    return response.json({
      data: user.all(),
      meta: user.getMeta(),
      message: true,
      status: 200,
    })
  }

  public async delete(id, response) {
    const user = await User.find(id)
    if (user) {
      user.delete()
    }
    return response.safeStatus(404).send({
      message: 'Deleted Successfully',
      status: 404,
    })
  }

  public async single(id, response) {
    const user = await User.find(id)
    if (user) {
      return response.json({
        data: user,
        message: true,
        status: 200,
      })
    }
  }

  public async update(user, request, response) {
    user.name = request.all().name
    user.email = request.all().email
    user.phone = request.all().phone
    await user.save()
    return response.safeStatus(200).json({
      data: 'Updated Successfully',
      message: true,
      status: 200,
    })
  }

  public async create(request, response) {
    const user = await User.create({
      name: request.all().name,
      email: request.all().email,
      phone: request.all().phone,
    })
    return response.safeStatus(200).json({
      data: 'User is created successfully',
      message: true,
      status: 200,
    })
  }
}

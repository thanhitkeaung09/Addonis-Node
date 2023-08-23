import Hash from '@ioc:Adonis/Core/Hash'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const newPostSchema = schema.create({
      email: schema.string(),
      password: schema.string(),
    })
    const payload = await request.validate({ schema: newPostSchema })
    try {
      const user = new User()
      user.email = payload.email
      user.password = await Hash.make(payload.password)
      await user.save()
      return response.json({
        data: 'User is successfully registered',
        message: true,
        status: 200,
      })
    } catch (error) {
      return response.json({
        data: error,
        message: false,
        status: 409,
      })
    }
  }

  public async login({ auth, request, response }: HttpContextContract) {
    // const user = await User.findBy('email', request.body().email)
    const email = request.input('email')
    const password = request.input('password')
    try {
      const token = await auth.use('api').attempt(email, password)
      return response.json({
        data: token.token,
        message: true,
        status: 200,
      })
    } catch {
      return response.json({
        data: 'Invalid Credential',
        message: false,
        status: 404,
      })
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'
import { v4 as uuidv4 } from 'uuid'

export default class ProfilesController {
  public async get_profile({ response }: HttpContextContract) {
    const profile = await Profile.query().preload('user')
    return response.json({
      data: profile,
      message: true,
      status: 200,
    })
  }

  public async single_profile({ request, response }: HttpContextContract) {
    const id = request.params().profile_id
    const profile = await Profile.query().preload('user').where('id', id).first()
    return response.json({
      data: profile,
      message: true,
      status: 200,
    })
  }

  public async delete_profile({ request, response }: HttpContextContract) {
    const id = request.params().profile_id
    const profile = await Profile.query().preload('user').where('id', id).first()
    profile?.delete()
    return response.notFound({
      data: 'Successfully Deleted',
      message: true,
      status: 404,
    })
  }

  public async create_post({ request, response }: HttpContextContract) {
    const coverImage = request.file('avatar_url')
    const fullName = request.body().full_name
    const userId = request.body().user_id
    const path = 'adonisjs/image/'
    const name = `${uuidv4()}.${coverImage?.extname}`

    const profile = new Profile()
    profile.userId = userId
    profile.fullName = fullName
    profile.avatarUrl = path + name
    profile.save()
    if (coverImage) {
      await coverImage.moveToDisk(
        path,
        {
          name: name,
        },
        's3'
      )
      return response.json({
        data: 'Profile is created successfully',
        message: true,
        status: true,
      })
    }
  }

  public async update_post({ request, response }: HttpContextContract) {
    const payload = request.body()
    return await payload
  }
}

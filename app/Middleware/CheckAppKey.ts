import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ApplicationKey from 'App/Models/ApplicationKey'

export default class CheckAppKey {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const AppId = request.header('app-id')
    const AppSecret = request.header('app-secret')
    if (!(AppId && AppSecret)) {
      response.unauthorized({
        error: 'Unauthorized',
        message: false,
        status: 404,
      })
      return
    }
    const key = await ApplicationKey.query()
      .where('app_id', AppId)
      .where('app_secret', AppSecret)
      .where('obsolete', 1)
      .first()
    console.log(key)
    if (key === null) {
      response.notFound({
        error: 'Oudated',
        message: false,
        status: 404,
      })
      return
    }
    await next()
  }
}

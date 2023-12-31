import Env from '@ioc:Adonis/Core/Env'
import Route from '@ioc:Adonis/Core/Route'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import User from './User'
export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: string

  @column()
  public fullName: string

  @column({
    prepare: (avatarUrl: string) => avatarUrl,
    consume: (avatarUrl: string) =>
      Route.makeUrl('image', [avatarUrl], {
        prefixUrl: `http://${Env.get('HOST')}:${Env.get('PORT')}`,
      }),
  })
  @column()
  public avatarUrl: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}

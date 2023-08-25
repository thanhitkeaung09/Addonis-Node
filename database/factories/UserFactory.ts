import Hash from '@ioc:Adonis/Core/Hash'
import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'

export default Factory.define(User, async ({ faker }) => {
  return {
    email: faker.internet.email(),
    password: await Hash.make('password'),
  }
}).build()

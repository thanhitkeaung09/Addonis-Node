import Factory from '@ioc:Adonis/Lucid/Factory'
import Profile from 'App/Models/Profile'
import UserFactory from './UserFactory'

export default Factory.define(Profile, async ({ faker }) => {
  return {
    full_name: faker.internet.userName(),
    avatar_url: faker.image,
  }
})
  .relation('users', () => UserFactory)
  .build()

import Factory from '@ioc:Adonis/Lucid/Factory'
import Profile from 'App/Models/Profile'
import UserFactory from './UserFactory'

export default Factory.define(Profile, async ({ faker }) => {
  return {
    // userId: 1,
    fullName: faker.internet.userName(),
    avatarUrl: faker.image.url(),
  }
})
  .relation('user', () => UserFactory)
  .build()

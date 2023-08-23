import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const user = await UserFactory.with('users', 3).create()
    user.users.length // 3
  }
}

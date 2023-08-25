import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProfileFactory from 'Database/factories/ProfileFactory'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await ProfileFactory.with('user').createMany(3) // user.user.length // 3
  }
}

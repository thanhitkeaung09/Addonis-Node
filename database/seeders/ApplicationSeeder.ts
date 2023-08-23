import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ApplicationKeyFactory from 'Database/factories/ApplicationKeyFactory'

export default class extends BaseSeeder {
  public async run() {
    // Write your  queriesdatabase inside the run method
    return await ApplicationKeyFactory.createMany(3)
  }
}

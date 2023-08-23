import Factory from '@ioc:Adonis/Lucid/Factory'
import ApplicationKey from 'App/Models/ApplicationKey'
import { v4 as uuidv4 } from 'uuid'

export default Factory.define(ApplicationKey, ({ faker }) => {
  return {
    app_id: uuidv4(),
    app_secret: uuidv4() + uuidv4(),
    obsolete: false,
  }
}).build()

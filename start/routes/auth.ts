import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('auth/:type/register', 'AuthController.register')
    .as('auth:register')
    .middleware('check.app.key')

  Route.post('auth/:type/login', 'AuthController.login')
    .as('auth:login')
    .middleware('check.app.key')

  Route.post('/logout', 'AuthController.logout')
    .as('auth:logout')
    .middleware(['auth', 'check.app.key'])

  /**
   * Profile
   */
  Route.get('/auth/profile', 'AuthController.profile')
    .as('auth:profile')
    .middleware(['auth', 'check.app.key'])
})
  .prefix('v1')
  .namespace('App/Controllers/Http/Auth')

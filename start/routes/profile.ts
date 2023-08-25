import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  /**
   * All Profiles
   */
  Route.get('/profile', 'ProfilesController.get_profile')

  /**
   * Single Profile
   */
  Route.get('/profile/:profile_id', 'ProfilesController.single_profile')

  /**
   * Delet a Profile
   */
  Route.delete('/profile/:profile_id', 'ProfilesController.delete_profile')

  /**
   * Create a Post
   */
  Route.post('/profile', 'ProfilesController.create_post')

  /**
   * Update a Post
   */
  Route.post('/profile/:profile_id/update', 'ProfilesController.update_post')
})
  .prefix('v1')
  .namespace('App/Controllers/Http/Profile')
  .middleware(['auth', 'check.app.key'])

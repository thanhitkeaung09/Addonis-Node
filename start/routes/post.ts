import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  /**
   *
   * @return All Posts
   */
  Route.get('/posts', 'PostsController.index').as('post:index')

  /**
   *
   * @return Single Post
   */
  Route.get('/posts/:post_id', 'PostsController.single').as('post.single')

  /**
   *
   * @return Create Post
   */
  Route.post('/posts', 'PostsController.create').as('post.create')

  /**
   *
   * @return Delete Post
   */
  Route.delete('/posts/:post_id', 'PostsController.delete').as('post.delete')

  /**
   *
   * @return Post Update
   */
  Route.post('/posts/:post_id/update', 'PostsController.update').as('post.update')
})
  .prefix('v1')
  .namespace('App/Controllers/Http/Post')
  .middleware(['auth', 'check.app.key'])

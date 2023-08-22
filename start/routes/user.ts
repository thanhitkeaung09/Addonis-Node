import Route from '@ioc:Adonis/Core/Route'

Route.get('/user/lists', 'UsersController.index').as('user:list')

Route.delete('/user/lists/:id', 'UsersController.delete').as('user:list:delete')

Route.get('/user/lists/:id', 'UsersController.single').as('user:list:single')

Route.put('/user/lists/:id', 'UsersController.update').as('user:list:update')

Route.post('/user/lists', 'UsersController.create').as('user:list:create')

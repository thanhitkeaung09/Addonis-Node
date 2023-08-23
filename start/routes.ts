/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import '../start/routes/app'
import '../start/routes/auth'
import '../start/routes/user'

// //testnig routes
// Route.get('/', async () => {
//   return { hello: 'world' }
// })

// Route.post('/about', async ({ request }) => {
//   return request.method()
// })
//   .prefix('v1')
//   .as('api')

// // Post CRUD
// Route.get('/posts', 'UsersController.index').as('get posts')

// Route.post('/posts', 'UsersController.create').as('get post')

// Route.get('/posts/create', () => {
//   return 'Display a form to create a post'
// }).as('create post')

// Route.get('/posts/:id', () => {
//   return 'Return a single post'
// }).as('single post')

// Route.get('/posts/:id/edit', () => {
//   return 'Display a form to edit a post'
// }).as('edit post')

// Route.put('/posts/:id', ({ request }) => {
//   return `Handle post update form submission ${request.params().id}`
// }).as('post put')

// Route.delete('/posts/:id', ({ request }) => {
//   console.log(request.params().id)
//   return `Delete Post ${request.params().id}`
// }).as('post delete')

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/users', 'UsersController.index')
Route.post('/users/skill', 'UsersController.skillUserRegister')
Route.post('/user', 'UsersController.userRegister')
Route.post('/skill', 'UsersController.skillRegister')

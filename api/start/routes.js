'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// healthcheck
Route.get('/', () => 'Hello world')

// room
Route
  .group(() => {
    Route.post('', 'RoomController.create')

    Route.get(':id', 'RoomController.select')
    Route.post(':id', 'RoomController.createMessage')
  })
  .prefix('/rooms')

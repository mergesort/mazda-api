import { Router } from 'itty-router'

import Posts from './handlers/posts'
import Post from './handlers/post'
import * as Car from './car-api'

const router = Router()

router
  .get('/api/posts', Posts)
  .get('/api/posts/:id', Post)
  .get('/api/authenticate', Car.authenticate)
  .get('/api/car/ac/on', Car.turnOnAirConditioner)
  .get('/api/car/ac/off', Car.turnOffAirConditioner)
  .get('/api/car/lock', Car.lockCarDoors)
  .get('/api/car/start', Car.startEngine)
  .get('/api/car/stop', Car.stopEngine)
  .get('/api/car/unlock', Car.unlockCarDoors)
  .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = (request: any) => router.handle(request)
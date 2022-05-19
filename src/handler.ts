import { Router } from 'itty-router'

import Posts from './handlers/posts'
import Post from './handlers/post'
import * as Car from './car-api'

const router = Router()

router
  .get('/api/posts', Posts)
  .get('/api/posts/:id', Post)
  .get('/api/authenticate', Car.authenticate)
  .get('/api/lockCar', Car.lockCarDoors)
  .get('/api/unlockCar', Car.unlockCarDoors)
  .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = (request: any) => router.handle(request)
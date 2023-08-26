import express from 'express'
import {login} from '../controller/auth.js'
import {updateChannelData,getAllChannels} from '../controller/channel.js'

const routes = express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updateChannelData)
routes.get('/getAllChannels',getAllChannels)
export default routes;
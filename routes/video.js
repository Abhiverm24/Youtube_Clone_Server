import express from "express";
import { uploadVideo , getAllVideo} from "../controller/video.js";
import {likeController} from "../controller/like.js";
import {viewController} from "../controller/view.js";
import {likeVideoController , getalllikeVideoController,deletelikeVideoController} from "../controller/likeVideo.js";
import {watchLatersController , getallwatchLatersController,deleteWatchLaterController} from "../controller/watchLater.js";
import {HistoryController , getallHistoryController,clearHistoryController} from "../controller/History.js";
import { LikedHistoryController, allLikedHistoryController, clearLikedHistoryController } from "../controller/LikedHistory.js"
import upload from '../Helpers/fileHelper.js'
import auth from '../middleware/auth.js'


const routes = express.Router();

routes.post("/uploadVideo",auth,upload.single("file"),uploadVideo)

routes.get("/getvideos",getAllVideo)

routes.patch('/like/:id',auth,likeController)

routes.patch('/view/:id',viewController)

routes.post('/likedvideos',auth,likeVideoController)
routes.get('/getAlllikedvideos',getalllikeVideoController)
routes.delete('/deletelikedVideo/:videoId/:Viewer',auth,deletelikeVideoController)



routes.post('/watchLaters',auth,watchLatersController)
routes.get('/getAllwatchLaters',getallwatchLatersController)
routes.delete('/deleteAllwatchLaters/:videoId/:Viewer',auth,deleteWatchLaterController)



routes.post('/History',auth,HistoryController)
routes.get('/getAllHistory',getallHistoryController)
routes.delete('/clearHistory/:userId',auth,clearHistoryController)


routes.post('/LikedHistory', auth, LikedHistoryController)
routes.get('/getAllLikedHistory', allLikedHistoryController)
routes.delete('/clearLikedHistory/:userId', auth, clearLikedHistoryController)

export default routes;
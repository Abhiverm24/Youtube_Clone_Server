import express from "express";
import { deleteComment, editComment, getAllComment, postComment} from "../controller/comment.js";

import auth from '../middleware/auth.js'


const router= express.Router()

router.post('/post',auth,postComment)
router.get('/get',getAllComment)
router.patch('/edit/:id',auth,editComment)
router.delete('/delete/:id',auth,deleteComment)
export default router
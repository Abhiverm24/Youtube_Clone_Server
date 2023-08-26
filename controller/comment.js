import comment from '../models/comments.js'

import mongoose from 'mongoose'


export const postComment = async(req,res)=>{
    const commentData = req.body;
    const postcomment = new comment(commentData);
    
    try {
        // console.log(commentData);
        await postcomment.save();
        res.status(200).json('Comment Posted');
    } catch (error) {
        res.status(400).json(error)
    }
}


export const getAllComment= async(req,res)=>{
    try {
        const CommentList = await comment.find();
        res.status(200).send(CommentList)
        // console.log("done")
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const deleteComment = async(req,res)=>{
    const { id:_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Comment Unavialable")
    }
    try {
        await comment.findByIdAndRemove(_id);
        res.status(200).json({message:"Comment Deleted"})
    } catch (error) {
        // console.log(error)
        res.status(400).json({message:error.message})
    }
}


export const editComment = async(req,res)=>{
    const {id:_id}=req.params;
    const {CommentBody}= req.body;
    // console.log(CommentBody)

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Comment Unavialable")
    }
    try {
        const updateComment = await comment.findByIdAndUpdate(
            _id,
            {
                $set:{"commentsBody":CommentBody}
            }
        )
        res.status(200).json(updateComment)
    } catch (error) {
        // console.log(error);
        res.status(400).json(error)
    }
}


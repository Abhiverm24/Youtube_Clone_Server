import watchLater from '../models/watchLater.js'
import mongoose from 'mongoose'

export const watchLatersController = async(req,res)=>{
    const watchLaterData = req.body;
    // console.log(watchLaterData)

    const addTowatchLater = new watchLater(watchLaterData)

    try {
        await addTowatchLater.save();
        res.status(200).json('added to watchLater')
    } catch (error) {
        res.status(400).json(error)
        
    }
}

export const getallwatchLatersController= async(req,res)=>{
    try {
        const files = await watchLater.find();
        res.status(200).send(files)
        // console.log("done")
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const deleteWatchLaterController = async(req,res)=>{
    const { videoId: videoId, Viewer : Viewer} = req.params;
    // console.log(videoId,Viewer)
    try {
        await watchLater.findOneAndDelete({
            videoId:videoId, Viewer : Viewer
        })
        res.status(200).json({message:"Video Removed from watch later"})
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}
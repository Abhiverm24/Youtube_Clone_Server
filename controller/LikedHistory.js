import mongoose from 'mongoose'

import LikedHistory from '../models/LikedHistory.js'



export const LikedHistoryController = async (req, res) => {
    const likedVideoData = req.body
    const addtoLikedVideo = new LikedHistory(likedVideoData)
    try {
        await addtoLikedVideo.save()
        res.status(200).json('Added to likedVideo')
    } catch (error) {
        res.status(400).json(error)

    }
}
export const allLikedHistoryController = async (req, res) => {
    try {
        const files = await LikedHistory.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }

}
export const clearLikedHistoryController = async (req, res) => {
    const { userId: userId } = req.params
    try {
        await LikedHistory.deleteMany({
            Viewer: userId
        })
        res.status(200).json({ message: "Removed from your LikedHistory" })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

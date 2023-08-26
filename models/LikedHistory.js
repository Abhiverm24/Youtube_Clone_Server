import mongoose from "mongoose";

const LikedHistorySchema = mongoose.Schema({
    videoId: { type: String, require: true },
    Viewer: { type: String, require: true },
})

export default  mongoose.model('LikedHistory', LikedHistorySchema)
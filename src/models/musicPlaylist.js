import mongoose from 'mongoose';

const { Schema, Types } = mongoose;


const MusicPlaylistSchema = new Schema({
  name: String,
  picture: String,
  description: String,
  songs: [{type: Types.ObjectId, ref: 'MusicSong'}],
});

MusicPlaylistSchema.statics = {
  createPlaylist(playlist){
    return this.create(playlist);
  },
  findPlaylistByName(name){
    return this.findOne({"name": name}).exec(); 
  },
  findPlaylistById(id){
    return this.findById(id).populate({path: 'songs', populate: {path: 'singer'}}).exec();
  },
  findAllPlaylist(){
    return this.find({}).populate({path: 'songs', populate: {path: 'singer'}}).exec();
  },
  addSong(id, songId){
    return this.findOneAndUpdate(
      {"_id": id, "mySong": {$ne: songId}},
      {$push: {"songs": songId}},
      {new: true}
    ).exec();
  },
}

export default mongoose.model('MusicPlaylist', MusicPlaylistSchema);

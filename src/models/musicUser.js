import mongoose from 'mongoose';

const { Schema, Types } = mongoose;


const MusicUserSchema = new Schema({
  username: String,
  password: String,
  avatar: {type: String, default: 'https://cdn2.vectorstock.com/i/1000x1000/10/86/music-equaliser-wave-vector-171086.jpg'},
  fullname: String,
  mySong:  [{type: Types.ObjectId, ref: 'MusicSong'}],
  favorite: [{type: Types.ObjectId, ref: 'MusicSong'}],
  history: [{_id: {type: Types.ObjectId, ref: 'MusicSong'}, latestListening: Number}],
  playlist:  [{type: Types.ObjectId, ref: 'MusicPlaylist'}],
});

MusicUserSchema.statics = {
  createUser(user){
    return this.create(user);
  },
  findUserByUsername(username){
    return this.findOne({"username": username})
      .populate({path: 'mySong', populate: {path: 'singer'}})
      .populate('favorite')
      .populate({path: 'history._id', populate: {path: 'singer'}})
      .populate('playlst')
      .exec(); 
  },
  findUserById(id){
    return this.findById(id)
      .populate({path: 'mySong', populate: {path: 'singer'}})
      .populate('favorite')
      .populate({path: 'history._id', populate: {path: 'singer'}})
      .populate('playlst')
      .exec();
  },
  addToMySong(id, songId){
    return this.findOneAndUpdate(
      {"_id": id, "mySong": {$ne: songId}},
      {$push: {"mySong": songId}},
      {new: true}
    ).exec();
  },
  addToFavoriteSong(id, songId){
    return this.findOneAndUpdate(
      {"_id": id, "favorite": {$ne: songId}},
      {$push: {"favorite": songId}},
      {new: true}
    ).exec();
  },
  async addToHistory(id, song){
    const isExisted = await this.find({$and: [{"_id": id}, {"history._id": song._id}]});
    if (isExisted.length === 0){
      return this.findOneAndUpdate(
        {"_id": id},
        {$push: {"history": song}},
        {new: true}
      ).exec();
    }
    return this.findOneAndUpdate(
      {$and: [{"_id": id}, {"history._id": song._id}]},
      {$set: {"history.$.latestListening": song.latestListening}},
      {new: true}
    ).exec();
  },
  addPlaylist(id, playlistId){
    return this.findOneAndUpdate(
      {"_id": id, "playlist": {$ne: playlistId}},
      {$push: {"playlist": playlistId}},
      {new: true}
    ).exec();
  }
}

MusicUserSchema.methods = {
  verifyPassword(password) {
      return this.password === password;
  }
};

export default mongoose.model('MusicUser', MusicUserSchema);

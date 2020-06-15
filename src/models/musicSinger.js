import mongoose from 'mongoose';

const { Schema, Types } = mongoose;


const MusicSingerSchema = new Schema({
  name: String,
  picture: String,
  description: String
});

MusicSingerSchema.statics = {
  createSinger(singer){
    return this.create(singer);
  },
  findSingerByName(name){
    return this.findOne({"name": name}).exec(); 
  },
  findSingerById(id){
    return this.findById(id).exec();
  },
  findAllSinger(){
    return this.find({}).exec();
  },
  addSong(id, songId){
    return this.findOneAndUpdate(
      {"_id": id, "mySong": {$ne: songId}},
      {$push: {"songs": songId}},
      {new: true}
    ).exec();
  },
}

export default mongoose.model('MusicSinger', MusicSingerSchema);

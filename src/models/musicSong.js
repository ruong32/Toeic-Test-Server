import mongoose from 'mongoose';

const { Schema, Types } = mongoose;


const MusicSongSchema = new Schema({
  uri: String,
  picture: String,
  name: String,
  singer: {type: Types.ObjectId, ref: 'MusicSinger'},
  topic: {type: String, enum: ['Nhạc trẻ', 'Cách mạng', 'Bolero']},
  view: {type: Number, default: 0},
});

MusicSongSchema.statics = {
  createSong(song){
    return this.create(song);
  },
  findSongByName(songName){
    return this.find({"name": songName}).exec(); 
  },
  findSongById(id){
    return this.findById(id).populate('singer').exec();
  },
  findAllSongs(){
    return this.find({}).populate('singer').exec();
  },
  increaseView(id){
    return this.findOneAndUpdate(
      {"_id": id},
      {$inc: {"view": 1}},
      {new: true}
    ).exec();
  }
}

export default mongoose.model('MusicSong', MusicSongSchema);

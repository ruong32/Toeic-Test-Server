import MusicSinger from '../models/musicSinger';

const createSinger = async singer => {
  return await MusicSinger.createSinger(singer);
}

const findSingerByName = async name => {
  return await MusicSinger.findSingerByName(name);
}

const findSingerById = async id => {
  return await MusicSinger.findSingerById(id);
}

const addSong = async (id, songId) => {
  return await MusicSinger.addSong(id, songId);
}

const findAllSinger = async () => {
  return await MusicSinger.findAllSinger();
}

export default {createSinger, findSingerById, findAllSinger, findSingerByName, addSong}

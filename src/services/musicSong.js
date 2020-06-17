import MusicSong from '../models/musicSong';

const createSong = async song => {
  return await MusicSong.createSong(song);
}

const findSongByName = async songName => {
  return await MusicSong.findSongByName(songName);
}

const findSongById = async songId => {
  return await MusicSong.findSongById(songId);
}

const findAllSongs = async () => {
  return await MusicSong.findAllSongs();
}

const findSongsBySinger = async singerId => {
  return await MusicSong.findSongsBySinger(singerId);
}

const findSongsByTopic = async topic => {
  return await MusicSong.findSongsByTopic(topic);
}

const incAnonymousView = async songId => {
  return await MusicSong.increaseView(songId);
}

export default {createSong, findSongById, findSongByName, findAllSongs, findSongsBySinger, incAnonymousView, findSongsByTopic}

import MusicUser from '../models/musicUser';
import MusicSong from '../models/musicSong';

const createUser = async user => {
  const existedUser = await MusicUser.findUserByUsername(user.username);
  if (!existedUser){
    return await MusicUser.createUser(user);
  }
  return false;
}

const login = async (username, password) => {
  const user = await MusicUser.findUserByUsername(username);
  if (!user) return false;
  const isLoggedIn = user.verifyPassword(password);
  if (isLoggedIn){
    return user;
  } else {
    return false;
  }
}

const findUserById = async id => {
  return await MusicUser.findUserById(id);
}

const addToMySong = async (id, songId) => {
  return await MusicUser.addToMySong(id, songId);
}

const addToFavoriteSong = async (id, songId) => {
  return await MusicUser.addToFavoriteSong(id, songId);
}

const addToHistory = async (id, song) => {
  MusicSong.increaseView(song._id);
  return await MusicUser.addToHistory(id, song);
}

const addPlaylist = async (id, playlistId) => {
  return await MusicUser.addPlaylist(id, playlistId);
}

export default {createUser, findUserById, login, addToMySong, addToFavoriteSong, addToHistory, addPlaylist}

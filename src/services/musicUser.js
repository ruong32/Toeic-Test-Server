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
  const user = await MusicUser.findUserById(id);
  user.history.sort((h1, h2) => h2.latestListening - h1.latestListening);
  return user;
}

const addToMySong = async (id, songId) => {
  const result = await MusicUser.addToMySong(id, songId);
  if (!result){
    return false;
  } else {
    return await findUserById(id);
  }
}

const addToFavoriteSong = async (id, songId) => {
  await MusicUser.addToFavoriteSong(id, songId);
  return await findUserById(id);
}

const addToHistory = async (id, song) => {
  MusicSong.increaseView(song._id);
  await MusicUser.addToHistory(id, song);
  return await findUserById(id);
}

const addPlaylist = async (id, playlistId) => {
  return await MusicUser.addPlaylist(id, playlistId);
}

export default {createUser, findUserById, login, addToMySong, addToFavoriteSong, addToHistory, addPlaylist}

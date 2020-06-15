import MusicPlaylist from '../models/musicPlaylist';

const createPlaylist = async playlist => {
  return await MusicPlaylist.createPlaylist(playlist);
}

const findPlaylistByName = async name => {
  return await MusicPlaylist.findPlaylistByName(name);
}

const findPlaylistById = async id => {
  return await MusicPlaylist.findPlaylistById(id);
}

const addSong = async (id, songId) => {
  return await MusicPlaylist.addSong(id, songId);
}

const findAllPlaylist = async () => {
  return await MusicPlaylist.findAllPlaylist();
}

export default {createPlaylist, findPlaylistById, findAllPlaylist,findPlaylistByName, addSong}

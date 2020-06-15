import MusicSingerService from '../services/musicSinger';
import MusicSongService from '../services/musicSong';
import MusicPlaylistService from '../services/musicPlaylist';

const getHome = async (req, res) => {
  const songs = await MusicSongService.findAllSongs();
  const singers = await MusicSingerService.findAllSinger();
  const playlists = await MusicPlaylistService.findAllPlaylist();
  const result = {
    songs, singers, playlists
  }
  return res.json(result);
}

export default {getHome}
import MusicPlaylistServices from "../services/musicPlaylist";

const createPlaylist = async (req, res) => {
  const playlist = {
    name: req.body.name,
    picture: req.body.picture,
    description: req.body.description
  }
  const playlistCreated = await MusicPlaylistServices.createPlaylist(playlist);
  return res.json(playlistCreated)
}

const findPlaylistById = async (req, res) => {
  const id = req.params.id;
  const result = await MusicPlaylistServices.findPlaylistById(id);
  return res.json(result);
}

const findPlaylistByName = async (req, res) => {
  const name = req.params.name;
  const result = await MusicPlaylistServices.findPlaylistByName(name);
  return res.json(result);
}

const addSong = async (req, res) => {
  const playlistId = req.body.playlistId;
  const songId = req.body.songId;
  const result = await MusicPlaylistServices.addSong(playlistId, songId);
  return res.json(result);
}

export default {createPlaylist, findPlaylistById, findPlaylistByName, addSong}

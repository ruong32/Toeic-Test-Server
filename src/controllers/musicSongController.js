import MusicSongServices from '../services/musicSong';

const createSong = async (req, res) => {
  const song = {
    uri: req.body.uri,
    picture: req.body.picture,
    name: req.body.name,
    singer: req.body.singer,
    topic: req.body.topic
  }
  const songCreated = await MusicSongServices.createSong(song);
  return res.json(songCreated);
}

const findSongByName = async (req, res) => {
  const songName = req.params.songName;
  const result = await MusicSongServices.findSongByName(songName);
  return res.json(result);
}

const findSongById = async (req, res) => {
  const songId = req.params.songId;
  const result = await MusicSongServices.findSongById(songId);
  return res.json(result);
}

const findAllSongs = async (req, res) => {
  const result = await MusicSongServices.findAllSongs();
  return res.json(result);
}

const findSongsBySinger = async (req, res) => {
  const singerId = req.params.singerId;
  const result = await MusicSongServices.findSongsBySinger(singerId);
  return res.json(result);
}

const incAnonymousView = async (req, res) => {
  const songId = req.body.songId;
  const result = await MusicSongServices.incAnonymousView(songId);
  return res.json(result);
}

export default { createSong, findSongByName, findSongById, findAllSongs, findSongsBySinger, incAnonymousView }

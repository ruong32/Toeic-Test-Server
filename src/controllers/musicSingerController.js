import MusicSingerServices from "../services/musicSinger";

const createSinger = async (req, res) => {
  const singer = {
    name: req.body.name,
    picture: req.body.picture,
    description: req.body.description
  }
  const singerCreated = await MusicSingerServices.createSinger(singer);
  return res.json(singerCreated)
}

const findSingerById = async (req, res) => {
  const id = req.params.id;
  const result = await MusicSingerServices.findSingerById(id);
  return res.json(result);
}

const findSingerByName = async (req, res) => {
  const name = req.params.name;
  const result = await MusicSingerServices.findSingerByName(name);
  return res.json(result);
}

const addSong = async (req, res) => {
  const playlistId = req.body.playlistId;
  const songId = req.body.songId;
  const result = await MusicSingerServices.addSong(playlistId, songId);
  return res.json(result);
}

export default {createSinger, findSingerById, findSingerByName, addSong}

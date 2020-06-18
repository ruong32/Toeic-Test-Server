import MusicUserServices from '../services/musicUser';

const createUser = async (req, res) => {
  const user = {
    username: req.body.username,
    nickname: req.body.username,
    password: req.body.password
  };
  const createdUser = await MusicUserServices.createUser(user);
  return res.json(createdUser);
}

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const result = await MusicUserServices.login(username, password);
  return res.json(result);
}

const findUserById = async (req, res) => {
  const userId = req.params.userId;
  const result = await MusicUserServices.findUserById(userId);
  return res.json(result);
}

const addToMySong = async (req, res) => {
  const userId = req.body.userId;
  const songId = req.body.songId;
  const result = await MusicUserServices.addToMySong(userId, songId);
  return res.json(result);
}

const addToFavoriteSong = async (req, res) => {
  const userId = req.body.userId;
  const songId = req.body.songId;
  const result = await MusicUserServices.addToFavoriteSong(userId, songId);
  return res.json(result);
}

const addToHistory = async (req, res) => {
  const userId = req.body.userId;
  const song = {
    _id: req.body.songId,
    latestListening: Date.now()
  }
  const result = await MusicUserServices.addToHistory(userId, song);
  return res.json(result);
}

const addPlaylist = async (req, res) => {
  const userId = req.body.userId;
  const playlistId = req.body.playlistId;
  const result = await MusicUserServices.addPlaylist(userId, playlistId);
  return res.json(result);
}

export default { createUser, login, findUserById, addToMySong, addToFavoriteSong, addToHistory, addPlaylist }

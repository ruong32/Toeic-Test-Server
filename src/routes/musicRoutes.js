import express from 'express';
import HomeController from '../controllers/musicHomeController';
import UserController from '../controllers/musicUserController';
import SongController from '../controllers/musicSongController';
import SingerController from '../controllers/musicSingerController';
import PlaylistController from '../controllers/musicPlaylistController';

const router = express.Router();

const initMusicRoutes = app => {

  router.get('/home', HomeController.getHome);

  // user
  router.post('/user/register', UserController.createUser);

  router.get('/user/:userId', UserController.findUserById);

  router.post('/user/login', UserController.login);

  router.put('/user/add-song', UserController.addToMySong);

  router.put('/user/add-favorite', UserController.addToFavoriteSong);

  router.put('/user/add-history', UserController.addToHistory);

  router.put('/user/add-playlist', UserController.addPlaylist);

  // song
  router.post('/song/create', SongController.createSong);

  router.get('/song/:songId', SongController.findSongById);

  router.get('/song/:songName', SongController.findSongByName);

  router.get('/song/singer/:singerId', SongController.findSongsBySinger);

  router.get('/song/topic/:topic', SongController.findSongsByTopic);

  router.get('/song', SongController.findAllSongs);

  router.put('/song/view/anonymous', SongController.incAnonymousView)

  // singer
  router.post('/singer/create', SingerController.createSinger);

  router.get('/singer/:id', SingerController.findSingerById);

  router.get('/singer/:name', SingerController.findSingerByName);

  router.put('/singer/add-song', SingerController.addSong);

  // playlist

  router.post('/playlist/create', PlaylistController.createPlaylist);

  router.get('/playlist/:id', PlaylistController.findPlaylistById);

  router.get('/playlist/:name', PlaylistController.findPlaylistByName);

  router.put('/playlist/add-song', PlaylistController.addSong);

  return app.use('/music', router);
}

export default initMusicRoutes;

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import initRoutes from '../src/routes/routes';
import initMusicRoutes from '../src/routes/musicRoutes';
import connectDB from '../src/config/connectDB';
import session from './config/session';
const PORT = process.env.PORT || 3299

connectDB();
const app = express();
session.config(app);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
initRoutes(app);
initMusicRoutes(app);
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

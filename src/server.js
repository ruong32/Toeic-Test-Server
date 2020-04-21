import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import initRoutes from '../src/routes/routes';
import connectDB from '../src/config/connectDB';
const PORT = process.env.PORT || 3299

connectDB();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
initRoutes(app);
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

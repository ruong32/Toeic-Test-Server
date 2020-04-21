import mongoose from 'mongoose';
import bluebird from "bluebird";

const connectDB = () => {
    mongoose.Promise = bluebird;
    let URI = `mongodb+srv://user:user@cluster0-ncnxf.gcp.mongodb.net/toeic-test?retryWrites=true&w=majority`;
    return mongoose.connect(URI, {useNewUrlParser: true});
};

export default connectDB;
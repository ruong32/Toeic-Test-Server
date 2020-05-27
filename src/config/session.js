import session from "express-session";
import connectMongo from "connect-mongo";

const mongoStore = connectMongo(session);

const sessionStore = new mongoStore({
    url: `mongodb+srv://user:user@cluster0-ncnxf.gcp.mongodb.net/toeic-test?retryWrites=true&w=majority`,
    autoReconnect: true,
    autoRemove: "native" 
});

let config = (app) => {
    app.use(session({
        key: "express.sid",
        secret: "mySecret",
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 30 * 60 * 1000,
            secure: false
        }
    }));
};

export default { config }

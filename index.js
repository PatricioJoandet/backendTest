import express from 'express';
import { AuthRouter, CartRouter, ProductRouter } from './routes/index.js';
import cors from 'cors';

import { PassportAuth } from './middlewares/index.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import { config } from './config/index.js';
import passport from 'passport';

const app = express();

PassportAuth.init();

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: config.DATABASE.mongo.url,
      ttl: 600,
    }),
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
    rolling: false,
    cookie: {
      maxAge: 600000,
    },
  })
);

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use('/api/auth', AuthRouter);
app.use('/api/products', ProductRouter);
app.use('/api/cart', CartRouter);

const server = app.listen(config.SERVER.PORT, () => console.log(`Server running on port ${config.SERVER.PORT} 🤠`));
server.on('error', error => console.log(`Server error ${error} 🤔`));   
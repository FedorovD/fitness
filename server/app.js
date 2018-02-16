const Nuxt = require('nuxt');
const bodyParser = require('body-parser');
const session = require('express-session');
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const _config = require('../config');
const PgSession = require('connect-pg-simple');
const DB = require('./db');

const { engines } = require('./../package.json');

const engineVersion = engines.node;

if (process.version !== engineVersion) {
  console.error('***************************************************************************');
  console.error(`* Required node version ${engineVersion} not satisfied with current version ${process.version}. *`);
  console.error('***************************************************************************');
  process.exit(1);
}

// app.use(bodyParser.json());
// app.use(session({
//   secret: 'super-secret-key',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 60000 }
// }));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
/* eslint-disable no-console */

const api = require('./api');

app.use(express.static(path.join( __dirname, './assets')));
app.use('/api', api);

const sessionStore = new (PgSession(session))({
  pool: DB._pool,
  tableName: 'session'
});

app.use(session({
  store: sessionStore,
  secret: _config.get('sessionSecret'),
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 30 * 24 * 60 * 60 * 1000} // 30 days
}));

app.use(function (req, res, next) {
  req.db = DB;
  next();
});



const isProd = process.env.NODE_ENV === 'production';

let config = require('../nuxt.config.js');
config.dev = !isProd;

const nuxt = new Nuxt(config);
const promise = (isProd ? Promise.resolve() : nuxt.build());

promise.then(() => {
  app.use(nuxt.render);
  app.listen(3000);
  console.log('Server is listening on http://localhost:3000');
})
.catch((error) => {
  console.error(error);
  process.exit(1);
});

const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");
var session = require('express-session');

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}))

app.set('trust proxy', 1) //trust first proxy
app.use(session({
  secret: 'my-secret',
  resave: true,
  rolling: true,
  saveUninitialized: true,
  name: 'accesstoken',
  cookie: {
    maxeAge: 1000 * 60 * 60 * 2,
    sameSite: true,  
    secure: false}
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Connect the mongoDB here
require('./configs/db')();

app.use(require('./routes'));

app.listen(3001, () => console.log('App available on http://localhost/3001'));

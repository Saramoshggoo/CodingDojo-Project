const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//load models
require('./models/models');
require('./config/config');
require('./routes/routes')(app);


app.listen(2020);

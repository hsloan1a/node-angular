const express = require('express')
//const mongoose = require('mongoose')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

const route = require('./route')

const PORT = 3000;

mongoose.connect('mongodb://mongo:27017/todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', ()=> {
    console.log('connected to database')
})

mongoose.connection.on('error', (err)=> {
    console.log(err)
})

app.use(cors())

app.use(bodyParser.json())


app.use('/', route);

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT)
});

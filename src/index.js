const express = require('express');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/LibraSys", {

    useNewUrlParser: true
    
})

.then( () => console.log("MongoDb is connected"))

.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
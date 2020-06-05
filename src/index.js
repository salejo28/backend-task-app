require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3100);

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.use('/tasks', require('./routes/task.routes'));

//starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const emprouter = require('./emprouter');

app.use(express.json());

app.use(require('./mware/auth'));

app.use('/emps', emprouter);

app.use('/login', require('./controller/logincontroller'));

mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser:true}, () => console.log('MOngoose COnnected'));

app.listen(5003, () => console.log('server is running!'));
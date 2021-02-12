const express = require('express');
const router = express.Router();
const { getEmpDetails, getEmpRecord, saveEmpDetails, delEmpDetails } = require('./controller/empcontroller');

//http://localhost:port/emps - GET for getEmpDetails and POST for saveEmpDetails methods

//router.route('/').get(getEmpDetails);
//router.route('/').post(saveEmpDetails);
//http://localhost:port/[empid] - Directly provide the id instead of '?id=' or any other URL suffixes - FOR MySQL
//Put http://localhost:5003/emps/empid as well as provide {"name":"Rakesh"} in the Body part of request - FOR MONGODB
//router.route('/:id').get(getEmpRecord);
//Put http://localhost:5003/emps/Dhanya as well as provide {"name":"Rakesh"} in the Body part of request - FOR MONGODB
router.route('/:id').delete(delEmpDetails);
//Not Working -Need Help!
//router.route('/:name/:dept').put(updEmpDetails);
module.exports = router;
const mongoose = require('mongoose');

const EmpSchema = mongoose.Schema(
    {
        empid:{
            type: Number,
            required: true
        },
        empname:{
            type: String,
            required: true
        },        
        addr:{
            type: String,
            required: true
        },    
        contact:{
            type: Number,
            required: true
        },            
        empdept:{
            type: String,
            required: true
        }             
    }
);

module.exports = mongoose.model('emp', EmpSchema);
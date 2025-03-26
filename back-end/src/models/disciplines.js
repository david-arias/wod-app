'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DisciplineSchema = new Schema({

    name: String,
    desc: String,
    dots: Array

});

module.exports = mongoose.model('V20_Disciplines', DisciplineSchema);
'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SectSchema = new Schema({

    name: String,
    desc: String

});

module.exports = mongoose.model('V20_Sects', SectSchema);
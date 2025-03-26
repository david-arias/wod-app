'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ClanSchema = new Schema({

    disciplineExtra: String,
    disciplines: Array,
    name: String,
    nickname: String,
    quote: String,
    sect: String,
    type: String

});

module.exports = mongoose.model('V20_Clans', ClanSchema);
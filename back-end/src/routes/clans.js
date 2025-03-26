'use strict';

const express = require('express');
const Clans = require('../controllers/clans');

let router = express.Router();

// POST CLAN
router.post('/save', Clans.saveClan);
// GET CLAN
router.get('', Clans.getClans);
// DELETE CLAN
router.delete('/delete/:id', Clans.deleteClan);
// UPDATE CLAN
router.put('/update/:id', Clans.updateClan);


module.exports = router;
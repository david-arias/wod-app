'use strict';

const express = require('express');
const Sects = require('../controllers/sects');

let router = express.Router();

// POST Sect
router.post('/save', Sects.saveSect);
// GET Sect
router.get('', Sects.getSects);
// DELETE Sect
router.delete('/delete/:id', Sects.deleteSect);
// UPDATE Sect
router.put('/update/:id', Sects.updateSect);


module.exports = router;
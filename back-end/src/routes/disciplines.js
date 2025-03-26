'use strict';

const express = require('express');
const Disciplines = require('../controllers/disciplines');

let router = express.Router();

// POST Discipline
router.post('/save', Disciplines.saveDiscipline);
// GET Discipline
router.get('', Disciplines.getDisciplines);
// DELETE Discipline
router.delete('/delete/:id', Disciplines.deleteDiscipline);
// UPDATE Discipline
router.put('/update/:id', Disciplines.updateDiscipline);


module.exports = router;
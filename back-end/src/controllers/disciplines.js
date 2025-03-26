'use strict';

const Discipline = require('../models/disciplines');

// contoller to CRUD

let controller = {

    // save Discipline
    saveDiscipline: (req, res) => {
        let params = req.body;
        let Disciplines = new Discipline();

        Disciplines.name = params.name;
        Disciplines.desc = params.desc;
        Disciplines.dots = params.dots;

        Disciplines.save().then((DisciplineStored) => {
            return res.status(200).send({
                status: "success",
                message: "Data save successfully",
                DisciplineStored
            })
        }).catch((error) => {
            return res.status(404).send({
                status: "error",
                message: "Cant save Discipline data",
                error
            })
        })
    },

    getDisciplines: ((req, res) => {
        Discipline.find({}).exec().then((data) => {

            // if send success
            return res.status(200).send({
                status: "success",
                message: "Data save successcfully",
                data
            })

        }).catch((error) => {

            return res.status(500).send({
                status: "error",
                message: "Cant get Discipline data",
                error
            })

        })
    }),

    deleteDiscipline: ((req, res) => {

        let DisciplineId = req.params.id;

        Discipline.findOneAndDelete({ _id: DisciplineId }).then((data) => {
            return res.status(200).send({
                status: "success",
                message: "Data delete successcfully",
                data
            })
        }).catch((error) => {
            return res.status(500).send({
                status: "error",
                message: "Cant delete Discipline data",
                error
            })

        })
    }),

    updateDiscipline: ((req, res) => {

        let DisciplineId = req.params.id;
        let params = req.body;

        console.log(req);
        console.log(params);

        let name = params.name;
        let desc = params.desc;
        let dots = params.dots;

        Discipline.findOneAndUpdate({ _id: DisciplineId }, {
            name,
            desc,
            dots,
        }, {
            new: true
        }).then((data) => {
            return res.status(200).send({
                status: "success",
                message: "Data update successcfully",
                data
            })
        }).catch((error) => {
            return res.status(500).send({
                status: "error",
                message: "Cant update Discipline data",
                error
            })

        })

    })

}

module.exports = controller;
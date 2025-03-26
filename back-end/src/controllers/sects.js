'use strict';

const Sect = require('../models/sects');

// contoller to CRUD

let controller = {

    // save Sect
    saveSect: (req, res) => {
        let params = req.body;
        let sects = new Sect();

        sects.name = params.name;
        sects.desc = params.desc;

        sects.save().then((sectStored) => {
            return res.status(200).send({
                status: "success",
                message: "Data save successfully",
                sectStored
            })
        }).catch((error) => {
            return res.status(404).send({
                status: "error",
                message: "Cant save sect data",
                error
            })
        })
    },

    getSects: ((req, res) => {
        Sect.find({}).exec().then((data) => {

            // if send success
            return res.status(200).send({
                status: "success",
                message: "Data save successcfully",
                data
            })

        }).catch((error) => {

            return res.status(500).send({
                status: "error",
                message: "Cant get Sects data",
                error
            })

        })
    }),

    deleteSect: ((req, res) => {

        let sectId = req.params.id;

        Sect.findOneAndDelete({ _id: sectId }).then((data) => {
            return res.status(200).send({
                status: "success",
                message: "Data delete successcfully",
                data
            })
        }).catch((error) => {
            return res.status(500).send({
                status: "error",
                message: "Cant delete Sects data",
                error
            })

        })
    }),

    updateSect: ((req, res) => {

        let sectId = req.params.id;
        let params = req.body;

        console.log(req);
        console.log(params);

        let name = params.name;
        let desc = params.desc;

        Sect.findOneAndUpdate({ _id: sectId }, {
            name,
            desc
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
                message: "Cant update Sect data",
                error
            })

        })

    })

}

module.exports = controller;
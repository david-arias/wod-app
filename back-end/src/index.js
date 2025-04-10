'use strict';

const colors = require('colors');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const bodyParser = require('body-parser');

const mongoUser = {
    user: "devius123",
    pass: "qwerty123"
}

const dbUrl = `mongodb+srv://${mongoUser.user}:${mongoUser.pass}@wordofdarkness.1cpx8.mongodb.net/wod?retryWrites=true&w=majority&appName=wordOfDarkness`;
// config to prevent connection errors
mongoose.Promise = global.Promise;

// ROUTES DECLARE
const clansRoutes = require('./routes/clans');
const sectsRoutes = require('./routes/sects');
const disciplinesRoutes = require('./routes/disciplines');


// body parser load
app.use(bodyParser.urlencoded({ extended: false }));
// req to json
app.use(bodyParser.json());
// CORS
app.use(cors());



// ROUTES
app.use('/api/v20/clans', clansRoutes);
app.use('/api/v20/sects', sectsRoutes);
app.use('/api/v20/disciplines', disciplinesRoutes);





mongoose.connect(dbUrl).then(() => {

    console.log(`${"\n"}= = = = =`);
    console.log(`Base de datos conectada`.brightGreen);
    app.listen(port, () => {
        console.log(`server runing port=` + `${port}`.brightGreen);
        console.log(`= = = = =${"\n"} `);
    })

}).catch((err) => {
    console.log(`${"\n"}= = = = =`);
    console.log(`imposible conectar: ${err}`.brightRed);
    console.log(`= = = = =${"\n"} `);

})


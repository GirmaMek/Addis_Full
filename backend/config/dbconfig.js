const mongoose = require('mongoose');
require('dotenv').config();
const mongooseConnect = async function () {
    mongoose.connect(process.env.DATABASE_URI)
    .then(() => {console.log('Mongoose Connected')})
    .catch((err) => {console.log(`Error => ${err} `)
    });
}

module.exports = mongooseConnect();

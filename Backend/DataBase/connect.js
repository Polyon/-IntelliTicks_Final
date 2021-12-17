const Mongoose = require('mongoose');

require('dotenv').config();

Mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connection Successfull.`);
}).catch((err) => {
    console.log(`Connection Unsuccessfull.\n${err}`)
});
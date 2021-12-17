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

// process.env.URI <=> mongodb+srv://Polyon:Polyon01@cluster-intelliticks.3jxnu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

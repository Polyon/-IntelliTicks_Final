const express = require('express');
const CORS = require('cors');

const { connectDB } = require('./DataBase/connect');
const api_controller = require('./controller');

const app = express();
app.use(express.json());
app.use(CORS());

app.use('/api', api_controller);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is lestening at port: ${port}`)
});

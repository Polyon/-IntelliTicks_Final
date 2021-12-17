const express = require('express');
const wModel=require('./DataBase/model')

var router = express.Router();

router.get('/', async(req, res) => {
    try {
        const allData = await wModel.find();
        res.status(200).send(allData);
    } catch (error) {
        res.status(404).send(`Not Found.\n${error}`)
    }
});

router.post('/add', async(req, res) => {
    try {
        const data = new wModel(req.body);
        await data.save();
        res.status(201).send('Created');
    } catch (error) {
        console.log(error);
        res.status(304).send(`Not Modified.\n${error}`);
    }
});

router.patch('/edit/:id', async(req, res) => {
    try {
        const data = await wModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).send(data);
    } catch (error) {
        res.status(304).send(`Not Modified.\n${error}`)
    }
});

module.exports = router;
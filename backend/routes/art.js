const express = require('express');
const auth = require("../middlewares/auth");
const artService = require("../services/art");
var router = express.Router();

router.post('/create', auth.ensureSignedIn, async (req, res) => {
    const { path, name, desc } = req.body;
    const result = await artService.create(path, name, desc);
    res.json(result);
})

router.get('/all', async (req, res) => {
    const arts = await artService.findAll();
    res.json(arts);
})
  
router.put('/update', auth.ensureSignedIn, async (req, res, next) => {
    const { _id, path, name, desc } = req.body;
    const result = await artService.update(_id, path, name, desc);
    res.json(result);
})

router.delete('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
    const { id } = req.params;
    const deletedArt = await artService.remove(id);
    res.json(deletedArt);
})

router.get('/:id', auth.ensureSignedIn, async (req, res) => {
    const { id } = req.params;
    const result = await artService.findById(id);
    res.json(result);
})

module.exports = router;

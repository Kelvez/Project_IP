const express = require('express');
const auth = require("../middlewares/auth");
const artService = require("../services/art");
const multer = require('multer');

var router = express.Router();
const upload = multer({
    // dest: 'artsUploaded',
    limits: {
        fileSize: 10000000, //10 Mo
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
            cb(new Error('Please upload an image (png, jpg or jpeg)'))
        }
        cb(undefined, true)
    }
});

router.post('/create', upload.single('upload'), async (req,res) => {
    const { name, desc } = req.body;
    const image = req.file.buffer;
    const result = await artService.create(image, name, desc);
    res.json(result);
}, (error, req, res, next) => {
    res.status(400).send({error: error.message});
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

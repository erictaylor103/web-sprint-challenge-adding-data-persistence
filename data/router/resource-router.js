const express = require('express')

const Resource = require('../model/project-model.js')


const router = express.Router();



//GET - resources

router.get('/', (req, res) => {    
    Resource.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to get resources'})     
    })
})




module.exports = router;
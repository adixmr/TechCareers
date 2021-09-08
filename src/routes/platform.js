const express = require('express');
const router = express.Router();

let platforms = {}
platforms.lever = require('../platform/lever')
platforms.skillate  = require('../platform/skillate')

router.get('/:platform/:company', async (req, res) => {
    try {
        let jobs = await platforms[req.params.platform](req.params.company)
        res.send(jobs)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router;
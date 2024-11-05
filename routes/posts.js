const express = require('express')
const router = express.Router()
const postsController = require('../controllers/postsController.js')


//GET
router.get('/', postsController.index)
router.get('/:slug', postsController.show)


//POST

router.post('/', postsController.store)

module.exports = router
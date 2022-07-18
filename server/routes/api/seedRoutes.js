const router = require('express').Router();

const {
    generateSeed
} = require('../../controllers/seedController')

router.route('/')
      .get(generateSeed)


module.exports = router
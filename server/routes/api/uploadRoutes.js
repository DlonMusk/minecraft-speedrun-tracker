const router = require('express').Router();

const {
    uploadRun
} = require('../../controllers/uploadController');

router.route('/')
      .post(uploadRun);

module.exports = router;
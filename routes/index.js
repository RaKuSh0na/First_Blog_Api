const express = require('express');

const router = express.Router();

const blogRouter = require('./blog');



router.use('/blog',blogRouter);


module.exports = router;





const express = require('express');

const { createBlog, getAll, getID, updateID, deleteID } = require('../controller/blog-controller');


const router = express.Router(); // initiate router function

router.post('/create', createBlog);
router.get('/getAll', getAll);
router.get('/getId/:id', getID);
router.put('/update/:id', updateID);
router.delete('/delete/:id', deleteID);



module.exports = router;

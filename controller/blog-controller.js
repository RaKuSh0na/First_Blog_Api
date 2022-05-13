const Blog = require('./../model/blog-model');

exports.createBlog = async (req, res, next) => {
    try {

        //getting data
        const blog = req.body;

        //save blog
        const saveBlog = await Blog.create(blog);

        //return
        return res.json({
            status: "success",
            blog: saveBlog  
        })
    } catch (e) {
        next(e)
    }
}


exports.getAll = async (req, res, next) => {
    try {
        const data = await Blog.find();
        return res.json({
            status: "success",
            blog: data
        })
    } catch (e) {
        next(e)
    }
}

exports.getID = async (req, res, next) => {
    try {
        const data = await Blog.findById(req.params.id);
        return res.json({
            status: "success",
            blog: data
        })
    } catch (e) {
        next(e)
    }
}

exports.updateID = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const result = await Blog.findByIdAndUpdate(id, updatedData, { })
        const updatedData1 =req.body;
        return res.json({
            status: "Update success",
            blog: updatedData1
        })
    }
    catch (e) {
        next(e);
    }
}


exports.deleteID = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Blog.findByIdAndDelete(id)

        return res.json({
            status: "successfully Deleted",
            
        })
    } catch (e) {
        next(e)
    }
}
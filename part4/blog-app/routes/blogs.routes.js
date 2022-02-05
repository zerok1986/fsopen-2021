const blogsRouter = require('express').Router()
const Blog = require('../models/Blog.model')

blogsRouter.get('/', (req, res) => {
  Blog.find({}).then((blogs) => {
    res.status(200).json(blogs)
  })
})

blogsRouter.post('/', (req, res) => {
  const blog = new Blog(req.body)

  blog.save().then((result) => {
    res.status(201).json(result)
  })
})

module.exports = blogsRouter

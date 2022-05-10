const { Post } = require('../models');

class PostController {
  // @route  GET /api/posts
  // @desc   Get all posts
  // @access Private
  async getAll(req, res) {}
  // @route  GET /api/posts/:id
  // @desc   Get single post
  // @access Private
  async getOne(req, res) {}
  // @route  POST /api/posts
  // @desc   Create a post
  // @access Private
  async addOne(req, res) {
    try {
      const { text } = req.body;

      if (!text || !text.trim()) throw new Error('Enter text');

      const post = await Post.create({ text, userId: req.user.id });

      res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = new PostController();

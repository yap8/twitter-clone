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
  async addOne(req, res) {}
}

module.exports = new PostController();

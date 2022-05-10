const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserController {
  // @route  POST /api/users/register
  // @desc   Register a new user
  // @access Public
  async register(req, res) {
    try {
      console.log(User);

      const { email, username, password } = req.body;

      // validation
      if (!email | !username | !password)
        throw new Error('Enter all the fields');

      if (await User.findOne({ where: { email } }))
        throw new Error('User with such email already exists');

      if (await User.findOne({ where: { username } }))
        throw new Error('User with such username already exists');

      const hash = await bcrypt.hash(password, 5);
      const user = await User.create({ email, username, password: hash });

      // generate a token
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          username: user.username,
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      // send response
      res.json(token);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  // @route  POST /api/users/login
  // @desc   Register a new user
  // @access Public
  async login(req, res) {}
}

module.exports = new UserController();

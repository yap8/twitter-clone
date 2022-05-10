const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
};

class UserController {
  // @route  POST /api/users/register
  // @desc   Register a new user
  // @access Public
  async register(req, res) {
    try {
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
      const token = generateToken({
        id: user.id,
        email: user.email,
        username: user.username,
      });

      // send response
      res.json(token);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  // @route  POST /api/users/login
  // @desc   Register a new user
  // @access Public
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // check if user exists
      const user = await User.findOne({ where: { email } });

      if (!user) throw new Error('No user with such credentials');

      // check if password match
      const match = await bcrypt.compare(password, user.password);

      if (!match) throw new Error('No user with such credentials');

      // generate a token
      const token = generateToken({
        id: user.id,
        email: user.email,
        username: user.username,
      });

      // send response
      res.json(token);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  // @route  GET /api/users/auth
  // @desc   Update token
  // @access Private
  async updateToken(req, res) {
    const token = generateToken({
      id: req.user.id,
      email: req.user.email,
      username: req.user.username,
    });

    res.json(token);
  }
}

module.exports = new UserController();

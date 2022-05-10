require('dotenv').config();

const PORT = process.env.PORT || 5000;

const express = require('express');
const sequelize = require('./db');
const models = require('./models');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api', require('./routes'));

// start
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT || 5000, () =>
      console.log(`server started on port ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Submission = sequelize.define('Submission', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name2: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync();

app.post('/submit', async (req, res) => {
  try {
    const submission = await Submission.create({
      name: req.body.name,
      name2: req.body.name2
    });
    res.json({ message: 'Data received successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.get('/submissions', async (req, res) => {
  try {
    const submissions = await Submission.findAll();
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

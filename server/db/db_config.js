const Sequelize = require('sequelize')
const POSTGRES_URL = require('../../config')
const db = new Sequelize(POSTGRES_URL)

const Notes = db.define('Notes', {
  Body: {
    type: Sequelize.STRING(255)
  },
  Date: {
    type: Sequelize.DATEONLY()
  }
});

Notes.sync();

db.authenticate()
  .then(function (err) {
    console.log('Connection established!');
  })
  .catch(function (err) {
    console.log('Connection error:', err);
  });

module.exports = {
  Notes: Notes
};
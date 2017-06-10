const Sequelize = require('sequelize')
const POSTGRES_URL = require('../../config')
const db = new Sequelize(POSTGRES_URL)

const Notes = db.define('notes', {
  entry: {
    type: Sequelize.STRING(255)
  }
});

Notes.sync();

//Notes.sync({force: true}); // RESET DB



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
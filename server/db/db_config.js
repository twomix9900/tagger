const Sequelize = require('sequelize')
const db = new Sequelize('notes', 'student', 'student', {
  dialect: 'mysql'
});

const Notes = db.define('notes', {
  title: Sequelize.STRING,
  entry: Sequelize.STRING
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
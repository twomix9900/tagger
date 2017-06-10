
const express = require('express')
const router = express.Router()
const db = require('../db/db_config')



router.post('/addNote', (req, res) => {
  db.Notes.create({
    entry: req.body.entry
  })
    .then(note =>
      res.send(note)
    )
    .catch(error =>
      res.send(error)
    )
})

router.get('/getAllNotes', (req, res) => {
  db.Notes.findAll()
    .then(function (notes) {
      res.send(notes)
    })
    .catch(error =>
      res.send(error)
    )
})

router.delete('/deleteNote', (req, res) => {
  console.log('req.body is ', req.body)
  db.Notes.destroy({
    where: {
      id: req.body.id
    }
  })
    .then(note => {
      console.log('the note has been deleted!!!', note)
      res.sendStatus(200)
    })
    .catch(error =>
      res.send(error)
    )
})

module.exports = router


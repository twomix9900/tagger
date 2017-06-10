
const express = require('express')
const router = express.Router()
const db = require('../db/db_config')


router.post('/addNote', (req, res) => {
  db.Notes.create({
    title: req.body.title,
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
  db.Notes.destroy({
    where: {
      title: req.body.title, 
      id: req.body.id,
      entry: req.body.entry
    }
  })
    .then(note => {
      res.sendStatus(200)
    })
    .catch(error =>
      res.send(error)
    )
})

router.post('/updateNote', (req, res) => {
  db.Notes.update(
    { title: req.body.title, entry: req.body.entry },
    { where: { id: req.body.id }})
  .then(note => {
    res.send(note)
  })
  .catch(error => 
    res.send(error)
  )
})

module.exports = router


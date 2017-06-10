
const express = require('express')
const router = express.Router()
const db = require('../db/db_config')

router.post('/api/postCookie', (req,res) => {
	db.Notes.create({
		noteBody: req.noteBody
	})
	.then(notes => 
    res.send(notes)
  )
	.catch(error => 
    res.send(error)
  )
})

router.get('/', (req, res) => {
  db.Notes.findAll()
  .then(function (notes) { 
    console.log('users = ', notes)
    res.send(notes)
  })
  .catch(error => 
  res.send(error)
  )
})

module.exports = router


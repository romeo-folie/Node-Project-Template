const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('This is the first page or some shit')
})

module.exports = router

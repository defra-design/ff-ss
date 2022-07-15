const express = require('express')
const router = express.Router()

// homepage search
router.post('/0/search-from-homepage', function (req, res) {

    res.redirect('search-results')

})


// start page
router.post('/0/start-form', function (req, res) {

    res.redirect('sign-in')

})

module.exports = router

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

// dashboard
router.post('/0/dashboard-reminders', function (req, res) {

    let reminders = req.session.data.reminders
    // overwrite values in the session data
    req.session.data.prototypes[0].reminders = reminders

    res.redirect('dashboard')

})

// 
router.post('/0/schemes-toggle-form', function (req, res) {

    let agreed = req.session.data.agreed

    // overwrite values in the session data
    req.session.data.prototypes[0].agreed = agreed

    res.redirect('schemes')

})

// pid0 - select land parcels
router.post('/0/schemes-link', function (req, res) {

    res.redirect('schemes')

})

module.exports = router

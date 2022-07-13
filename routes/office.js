const express = require('express')
const router = express.Router()
const {getAllOffices, createOffice, getOffice, updateOffice} = require('../controllers/office')

router.route('/').get(getAllOffices)


router.route('/').post(createOffice)

router.route('/:id').get(getOffice)

router.route('/:id').patch(updateOffice)

module.exports = router
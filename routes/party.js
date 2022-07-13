const express = require('express')
const router = express.Router()
const {getAllParties, createParty, getParty, updateParty} = require('../controllers/party')
router.route('/').get(getAllParties)


router.route('/').post(createParty)

router.route('/:id').get(getParty)

router.route('/:id').patch(updateParty)

module.exports = router
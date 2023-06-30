

const express = require('express')
const CountryController = require('../controllers/CountryController')

const router = express.Router()

router.get('/', CountryController.getAllCountries)
router.post('/', CountryController.createCountry)
router.get('/:id', CountryController.getCountryById)
router.put('/:id', CountryController.updateCountry);
router.delete('/:id', CountryController.deleteCountry)






module.exports = router

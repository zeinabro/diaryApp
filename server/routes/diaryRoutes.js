const express = require('express')
const DiaryController = require('../controllers/DiaryController')

const router = express.Router()

router.get('/', DiaryController.getAllEntries)
router.post('/', DiaryController.createEntry)
router.delete('/:id', DiaryController.deleteEntry)
router.patch('/:id', DiaryController.updateEntry);


module.exports = router
const express = require('express')
const DiaryController = require('../controllers/DiaryController')

const router = express.Router()

router.get('/', DiaryController.getAllDiaries)
router.post('/', DiaryController.createDiary)
router.get('/:id', DiaryController.getDiaryById)
router.put('/:id', DiaryController.updateDiary);
router.delete('/:id', DiaryController.deleteDiary)






module.exports = router

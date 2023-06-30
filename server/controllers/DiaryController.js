const Diary = require('../models/Diary')

class DiaryController{

    static async createEntry(req,res){
        const entry = req.body
        try {
            const newEntry = await Diary.createEntry(entry)
            res.status(201).json(newEntry)
        } catch (error) {
            res.status(500).json({Error:`Error - ${error}`})
        }
    }

}

module.exports = DiaryController
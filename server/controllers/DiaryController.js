const Diary = require('../models/Diary')

class DiaryController{

    static async getAllEntries(req,res){
        try {
            const data = await Diary.getAllEntries()
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({error:`Internal Server Error - ${error}`})
        }
    }

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
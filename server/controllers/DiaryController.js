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

    static async getEntryByUser(req, res){
        const { id } = req.params
        try{
            const entries = await Diary.getEntryByUser(id)
            if(entries){
                res.status(200).json(entries)
            }else{
                res.status(404).json({error: `User not found!`})
            }
        }catch(error){
            res.status(500).json({error: `oops something went wrong - ${error}`})
        }
    }

    static async deleteEntry(req,res){
        const {id} = req.params
        try {
            await Diary.deleteEntry(id)
            res.status(204).end()
        } catch (error) {
            res.status(500).json({Error:`Error code - ${error}`})
        }
    }

    static async updateEntry(req,res){
        const {id} = req.params
        const newEntry = req.body
        try {
            const entry = await Diary.updateEntry(id,newEntry)
            if(entry){
                res.status(200).json(entry)
            }else{
                res.status(404).json({error: `Entry not found`})
            }
        } catch (error) {
            res.status(500).json({error:`Oops something went wrong - ${error}`})
        }
    }
}

module.exports = DiaryController

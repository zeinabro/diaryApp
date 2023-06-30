const db = require('../database/db')

class Diary{
    static async getAllEntries(){
        const query = 'SELECT * FROM entries'
        const {rows} = await db.query(query)
        return rows
    }

    static async createEntry(diary){
        const {date_time, category, content, user_id } = diary
        const query = 'INSERT INTO entries (date_time, category, content, user_id ) VALUES ($1, $2, $3, $4) RETURNING *'
        const values = [date_time, category, content, user_id]
        const {rows} = await db.query(query,values)
        return rows[0]
    }
}

module.exports = Diary
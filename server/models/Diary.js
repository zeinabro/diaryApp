const db = require('../database/db')

class Diary{
    static async createEntry(diary){
        const {timestamp, category, content } = diary
        const query = 'INSERT INTO entries (timestamp, category, content) VALUES ($1, $2, $3) RETURNING *'
        const values = [timestamp, category, content]
        const {rows} = await db.query(query,values)
        return rows[0]
    }
}

module.exports = Diary
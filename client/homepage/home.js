// let id = localStorage.getItem('id')
let id = 1

const showEntries = async() => {
    const resp = await fetch(`http://localhost:3001/entries/users/${id}`)
    if (!resp.ok){
        console.log(error)
    }
    const entries = await resp.json()
    const { date_time,category,content } = entries
    const date = document.createElement('td')
    date.textContent = date_time
    diaryTable.appendChild(date)
    console.log(date)
    
}

const diarySection = document.querySelector('.diary')
showEntries()
const diaryTable = document.querySelector('.entries')

const express = require('express')
const app = express()

let persons = [

    {
      "id": 1,
      "name": "Arto Hallas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Aku Ankka",
      "number": "040-555231"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-46-789542"
    },
	{
	  "id": 4,
	  "name": "Hanna Karjanen",
	  "number": "052-213654"
	}
]

const info = () => {
	const count = persons.length
	const date = new Date().toLocaleString()
return `Phonebook has info for ${count} people` + "<br><br>" + ` ${date}`
}
	

app.get('/info', (req, res) => {
	res.send(info())
})

app.get('/api', (req, res) => {
	res.send('<h1>Hei maailma</h1>')
})

app.get('/api/persons', (req, res) => {
	res.json(persons)
})


const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
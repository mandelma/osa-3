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

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	const person = persons.find(p => p.id === id)
	console.log(id)
	console.log(person)
	if(person){
		res.json(person)
	}else{
		res.status(404).end()
	}
})


const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
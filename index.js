const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())



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

app.use(express.static('build'))

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
	//const id = Number(req.params.id)
	//const person = persons.find(p => p.id === id)
	//console.log(id)
	//console.log(person)
	//if(person){
	//	res.json(person)
	//}else{
	//	res.status(404).end()
	
	//res.json(persons)
	
	res.send(persons)
	
})

const generateId = () => {
	const min = persons.length + 1
	const max = 30
	const maxId = persons.length > 0
		? Math.random() * (max - min) + min
		: 0
	return Math.ceil(maxId)
}


app.post('/api/persons', (req, res) => {
	const body = req.body
	
	if(!body.name || !body.number){
		return res.status(400).json({
			error: 'name or number are missing'
		})
	}
	
	if(persons.find(n => n.name === body.name)){
		return res.status(400).json({
			error: 'name already exists'
		})
	}
	
	
	const person = {
		id: generateId(),
		name: body.name,
		number: body.number
	}
	persons = persons.concat(person)
	console.log(req.body)
	res.json(person)
})




app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id)
	person = persons.filter(name => name.id !== id)
	persons = person
	response.status(204).end()
})




const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
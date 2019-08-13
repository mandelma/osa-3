require('dotenv').config()

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())

const Person = require('./models/personNotes')

let persooons = [

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

//const info = () => {
//	const count = persons.length
//	const date = new Date().toLocaleString()
//return `Phonebook has info for ${count} people` + "<br><br>" + ` ${date}`
//}


app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Person({
    name: body.name,
    number: body.number
  })

  note.save().then(savedNote => {
    response.json(savedNote.toJSON())
  })
})

app.get('/info', (req, res) => {
	res.send(info())
})

app.get('/', (req, res) => {
	res.send('<h1>Hei maailma</h1>')
})




app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
	console.log("db pikkus on: " + persons.length)
  });
});

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(note => {
    response.json(note.toJSON())
  })
})



//const generateId = () => {
//	const min = persons.length + 1
//	const max = 30
//	const maxId = persons.length > 0
//		? Math.random() * (max - min) + min
//		: 0
//	return Math.ceil(maxId)
//}




	


app.delete('/api/persons/:id', (req, res) => {
	Person.deleteOne({ _id: req.params.id}, (err, result) => {
		if(err) {
			res.status(404).send(err)
		}
		
		res.status(200).json({ message: "Task successfully deleted" })
		
		

	})
	
})






const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
require('dotenv').config()

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())


app.use(morgan('tiny'))
app.use(cors())

const logger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(logger)

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

app.get('/', (req, res) => {
	res.send('<h1>Hei maailma</h1>')
})

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



app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
	console.log("db pikkus on: " + persons.length)
  });
});

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then(note => {
	if(note){
		response.json(note.toJSON())
	}
	else{
		response.status(204).end()
	}
  })
  .catch(error => next(error))
})


app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const personNote = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, personNote, { new: true })
    .then(updatedPersonNote => {
      response.json(updatedPersonNote.toJSON())
    })
    .catch(error => next(error))
})


app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})


	


//app.delete('/api/persons/:id', (req, res) => {
//	Person.deleteOne({ _id: req.params.id}, (err, result, next) => {
//		if(err) {
//			res.status(404).send(err)
//		}
//		
//		res.status(200).json({ message: "Task successfully deleted" })
//
//	})
//	
//})


// Delete error üle vaadata!!


const unknownEndpoint = (req, res) => {
	res.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)



const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
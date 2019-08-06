const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://Almonda:${password}@cluster0-wsdfi.mongodb.net/person-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', noteSchema)

const personName = process.argv[3]
const personNumber = process.argv[4]

const people = new Person({
	name: personName,
	number: personNumber,
})
	

if(process.argv.length > 3){
	people.save().then(result => {
	console.log(`Added ${personName} number ${personNumber} to phonebook`)
	mongoose.connection.close()
	})	
}
else{
	Person.find({}).then(result => {
		console.log("Phonebook:")
		result.forEach(people => {
			console.log(people.name + " " + people.number)
		})
		mongoose.connection.close()
	})
}
const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)


// eslint-disable-next-line no-undef
const url = process.env.MONGODB_URI



console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

console.log(typeof process.env.MONGODB_URI)

const noteSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, required: true, unique: true },
  number: { type: String, minlength: 8, required: true }
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

noteSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Person', noteSchema)


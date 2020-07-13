const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    console.log('DB Running');
  } catch (error) {
    console.log(error)
    throw new Error('Error to start the DB')
  }
}


module.exports = {
    dbConnection
}
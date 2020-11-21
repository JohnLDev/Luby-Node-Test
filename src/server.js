require('express-async-errors')
require('./database')
require('dotenv/config')
const express = require('express')
const Routes = require('./routes')
const { ValidationError } = require('yup')
const AppError = require('./errors/AppError')

const app = express()
app.use(express.json())
app.use(Routes)
app.use((error, request, response, _next) => {
  if (error instanceof ValidationError) {
    return response
      .status(400)
      .json({ errors: error.errors.map(error => error) })
  }
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'client error',
      message: error.message,
    })
  }
  console.error(error)
  return response.status(500).json({ message: 'internal server error' })
})
app.listen(3333, () => {
  console.log('Server started')
})

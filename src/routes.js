const express = require('express')

const routes = express.Router()

routes.post('/users', (request, response) => {
  // const query = request.query
  // const params = request.params
  const body = request.body

  console.log(body)

  return response.json({
    evento: 'Omnistack 11.0',
    nome: 'Master of Universe'
  })
})

module.exports = routes
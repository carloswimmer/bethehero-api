const express = require('express')

const app = express()

app.use(express.json())

app.post('/users', (request, response) => {
  // const query = request.query
  // const params = request.params
  const body = request.body

  console.log(body)

  return response.json({
    evento: 'Omnistack 11.0',
    nome: 'Carlos Wimmer'
  })
})

app.listen(3333)
const express = require('express')

const app = express()

app.get('/', (request, response) => {
  return response.json({
    evento: 'Omnistack 11.0',
    nome: 'Carlos Wimmer'
  })
})

app.listen(3333)
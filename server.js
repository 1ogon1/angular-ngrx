function requireHTTPS(request, response, next) {
  if (!request.secure && request.get('x-forwareded-proto') !== 'https') {
    return response.redirect(`https://${request.get('host')}${request.url}`)
  }

  next()
}

const express = require('express')
const app = express()

// app.use(reqыuireHTTPS)
app.use(express.static('./dist/angular-ngrx'))

app.get('/*', function (request, response) {
  response.sendFile('index.html', { root: 'dist/angular-ngrx/' })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, function () {
  console.log(`Server has been started on port: ${PORT}`)
})

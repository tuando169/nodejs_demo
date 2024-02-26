const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// localhost:3000/
// route
app.get('/', (req, res) => {
  res.send(`
    <link rel='stylesheet' href='/css/app.css' />
    <h2>HOME PAGE</h2>
  `)
})

//localhost:3000/news
app.get('/news', (req, res) => {
    res.send(`
        <link rel='stylesheet' href='/css/app.css' />
        <h1>NEWS PAGE</h1>
    `)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
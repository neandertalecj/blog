const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

const data = 'Hi!'
app.get('/', (req, res) => res.render('index', {data}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


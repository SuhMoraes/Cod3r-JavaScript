const express = require('express') /* Importa o Express*/
const app = express() /* Imstancia o express a variável app*/
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true}))

app.get('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Rodou a aplicação!</h1><br><h2>Usuário incluído!</h2>')
})

app.get('/usuarios/:id', (req, resp) => {
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<h1>Usuário Alterado!</h1>')
})

app.listen(5500)

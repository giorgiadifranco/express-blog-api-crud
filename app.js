const express = require ('express');
const app = express()
//const postsRicette = require('./db/db.js')
const postsController = require('./controllers/postsController.js')

const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
})  

//creazione della rotta
app.get('/',(req, res)=>{

    res.send('Le mie ricette')
})




app.get('/posts', postsController.index)
app.get('/posts/:slug', postsController.show)
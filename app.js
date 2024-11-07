const express = require ('express');
const app = express()
app.use(express.json())


//const postsRicette = require('./db/db.js')
const postsRoutes = require('./routes/posts.js');
const notFoundMiddleware = require('./middleware/notFoundMiddleware.js');

const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
})  

//creazione della rotta
app.get('/',(req, res)=>{

    res.send('Le mie ricette')
})


app.use('/posts', postsRoutes)



app.use(notFoundMiddleware)
const express = require ('express');
const app = express()
//const postsRicette = require('./db/db.js')

const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
})  

//creazione della rotta
app.get('/',(req, res)=>{

    res.send('Le mie ricette')
})

const posts = require ('./db/db.js')
//metodo index
app.get('/posts', (req, res)=>{
    res.status(200).json({
        data: posts,
        counter: posts.length
    })
})


app.get('/posts/:slug', (req, res)=>{

    
    const post = posts.find( post => post.slug === req.params.slug)
    console.log(post)

    //const params = req.params
    //console.log(params);
    res.json({
        data : post
    })
    
})
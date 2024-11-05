// seconda rotta -- response con formato json
const posts = require('../db/db.js')
const fs = require('fs')

const index = (req, res)=>{
    res.status(200).json({
        data: posts,
        counter: posts.length
    })
}

const show = (req, res)=>{

    
    const post = posts.find( (post) => post.slug === req.params.slug)
    
    if (!post){
        return res.status(404).json({ error:`no post with ${JSON.stringify(post, null, 4)}`})
    }

  
    return res.status(200).json({data: post})
       

    }

const store = (req, res)=>{
    
    const post = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        ingredients: req.body.ingredients
       }
    posts.push(post)
    

    /*return res.json({

        body: req.body })*/

  
        
    
    

    fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(posts, null, 4)}` )
    
    return res.status(201).json({
        status: 201,
        data: posts,
        count: posts.length
    })

}


module.exports = {

    index,
    show, 
    store
}
// seconda rotta -- response con formato json
const posts = require ('../db/db.js')

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
    


module.exports = {

    index,
    show
}
// seconda rotta -- response con formato json
const posts = require ('../db/db.js')

const index = (req, res)=>{
    res.status(200).json({
        data: posts,
        counter: posts.length
    })
}

const show = (req, res)=>{

    
    const post = posts.find( post => post.slug === req.params.slug)
    console.log(post)

    //const params = req.params
    //console.log(params);
    res.json({
        data : post
    })
    
}

module.exports = {

    index,
    show
}
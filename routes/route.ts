import {Request,Response} from 'express';
const router_ = require("router");
const router = router_();
const createArticle = require("../controller/createBlog.controller")
const fetchBlog = require('../controller/fetchBlog.controller')
/*
 * /create-article
 * /edit-article
 * /:article-name
 * */
router.get("/create",(req:Request,res:Response)=>{
    res.render('newBlog');
})
router.route("/create/:createarticle").post(createArticle);
router.route('/').get(fetchBlog);
// router.post('/blog/create-article',(req:Request))
module.exports = router; 
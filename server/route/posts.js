import express from 'express';
import {getPosts,createPosts,updatePost,likePost,deletePost} from '../controllers/posts.js'
import auth from '../middleware/auth.js'
const router = express.Router();

//http://localhost:5000/posts
router.get('/',getPosts)
router.post('/',auth,createPosts)
router.patch('/:id',auth,updatePost)
router.patch('/:id/likePost',auth,likePost)
router.delete('/:id',auth,deletePost)




export default router;
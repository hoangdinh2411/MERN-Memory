import express from "express";
import {signup, signin} from '../controllers/user.js'
//http://localhost:5000/user
const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)


export default router
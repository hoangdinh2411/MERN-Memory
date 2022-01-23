import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id:String ,
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

const userMessage = mongoose.model('UserMessage',userSchema)
export default userMessage

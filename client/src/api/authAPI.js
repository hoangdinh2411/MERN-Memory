import axiosClient from "./axiosClient";

const url ='/user'

const authAPI = {
    signUp : async (data)=>{
        return await axiosClient.post('/user/signup',data)
    },
    signIn : async(data)=>{
        return await axiosClient.post(url+'/signin',data)
    },
}

export default authAPI
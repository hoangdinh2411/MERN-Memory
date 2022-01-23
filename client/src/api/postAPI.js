import axiosClient from 'api/axiosClient';
const url ='/posts'
const postAPI = {
    fetchPosts: async ()=>{
        return  await axiosClient.get(url)
    },
    postNewMemory : async(newPost)=>{
        return await axiosClient.post(url,newPost)
    },
    updatePost : async(id,updatePost)=>{
        return await axiosClient.patch(`${url}/${id}`,updatePost)
    },
    likePost : async(id)=>{
        return await axiosClient.patch(`${url}/${id}/likePost`)
    },
    deletePost : async(id)=>{
        return await axiosClient.delete(`${url}/${id}`)
    }
}

export default postAPI
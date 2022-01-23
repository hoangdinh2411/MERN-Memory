import {fetchAll , fetchSuccess, fetchError, createPost, updatePost,deleteAPost, likeForPost} from './actions'
import postAPI from 'api/postAPI'
export const fetchingRequest = ()=>{
    return dispatch =>{
        dispatch(fetchAll());
        return postAPI.fetchPosts()
        .then(data=>{
            dispatch(fetchSuccess(data))
        })
        .catch(err=>{
            const errMessage = err.message
            dispatch(fetchError(errMessage))
        })
    }
}
export const createNewPost = (newPost)=>{
    return dispatch =>{
        return postAPI.postNewMemory(newPost)
        .then(data=>{
            dispatch(createPost(data))
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
}
export const updatePostById = (id, newData)=>{
    return dispatch =>{
        return postAPI.updatePost(id, newData)
        .then(data=>{
            dispatch(updatePost(data))
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
}
export const deletePostById = (id)=>{
    return dispatch =>{
        return postAPI.deletePost(id)
        .then(()=>{
            dispatch(deleteAPost(id))
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
}
export const likePostById = (id)=>{
    return dispatch =>{
        return postAPI.likePost(id)
        .then(()=>{
            dispatch(likeForPost(id))
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
}
import postActions from './constants';

export const fetchAll = ()=>{
    return {
        type: postActions.FETCHING_POST,
    }
}

export const fetchSuccess = (data)=>{
    return {
        type: postActions.FETCHING_SUCCESS,
        payload: data
    }
}

export const fetchError = (error)=>{
    return {
        type: postActions.FETCHING_ERROR,
        payload: error
    }
}
export const createPost = (data)=>{
    return {
        type: postActions.CREATE,
        payload: data
    }
}
export const updatePost = (data)=>{
    return {
        type: postActions.UPDATE,
        payload: data
    }
}
export const deleteAPost = (id)=>{
    return {
        type: postActions.DELETE,
        payload: id
    }
}
export const likeForPost = (id)=>{
    return {
        type: postActions.LIKE,
        payload: id
    }
}

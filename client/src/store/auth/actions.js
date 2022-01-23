import authActions from "./constants"
export const signIn =(data) =>{
    return {
        type: authActions.SIGN_IN,
        payload: data
    }
}

export const signOut =() =>{
    return {
        type: authActions.SIGN_OUT,
    }
}


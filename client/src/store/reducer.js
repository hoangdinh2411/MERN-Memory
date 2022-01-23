import postActions from './constants';
const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case postActions.FETCHING_POST:
      return { ...state, 
        isLoading: true
      };
    case postActions.FETCHING_SUCCESS:
      return { ...state, 
        isLoading: false,
        data: payload
      };
    case postActions.FETCHING_ERROR:
      return { 
        isLoading: false,
        data: [],
        error: payload
      };
    case postActions.CREATE:
      return { 
        ...state,
        data: [...state.data, payload],
      };
    case postActions.UPDATE:
      return { 
        ...state,
        data: state.data.map(post=>(post._id || post.googleId) === payload._id ? payload : post )
      };
    case postActions.DELETE:
      return { 
        ...state,
        data: state.data.filter(post=>(post._id || post.googleId) !== payload)
      };
    case postActions.LIKE:
      return { 
        ...state,
        data: state.data.map(post=>(post._id || post.googleId)  === payload 
          ? {
            ...post,
          likes: [...post.likes, payload]
        } : post )
      };

    default:
      return state;
  }
};

export default postsReducer



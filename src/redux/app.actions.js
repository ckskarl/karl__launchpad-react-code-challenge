import { configureStore as _configureStore, applyMiddleware as _applyMiddleware } from 'redux';
const configureStore = _configureStore
const applyMiddleware =_applyMiddleware
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const initialState ={
    loading: false,
    posts: [],
    error:''
}

const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

const fetchPostsRequest = () =>{
    return{
        type: FETCH_POSTS_REQUEST
    }
}

const fetchPostsSuccess = (posts) =>{
    return{
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

const fetchPostsFailure = (error) =>{
    return{
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}




const reducer = (state = initialState, action )=>{
    switch (action.type){
        case FETCH_POSTS_REQUEST:
            return {
                ... state,
                loading: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error:''
            }
        case FETCH_POSTS_FAILURE:
            return {
                loading: false,
                posts: [],
                error:action.payload
            }
    }
}



const fetchPosts = () =>{
    return function(dispatch){
        dispatch(fetchPostsRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts?%20_start=0&_limit=20')
            .then( response => {
                const posts = response.data.map(post => post.id)
                dispatch(fetchPostsSuccess(posts))
            })
            .catch(error =>{
                dispatch(fetchPostsError(error.message))
            })

    }
}





const store= configureStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(()=> { console.log(store.getState())})
store.dispatch(fetchPosts)
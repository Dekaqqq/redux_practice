import axios from 'axios';
import {
    fetchPostsStart,
    fetchPostsSuccess,
    fetchPostsError,
    deletePostStart,
    deletePostSuccess,
    deletePostError,
    addPostStart,
    addPostSuccess,
    addPostError,
} from './postsAction';

export const fetchPosts = () => dispatch => {
    dispatch(fetchPostsStart());

    axios
        .get('http://localhost:4040/posts')
        .then(response => {
            dispatch(fetchPostsSuccess(response.data));
        })
        .catch(error => {
            dispatch(fetchPostsError(error));
        });
};

export const deletePost = id => dispatch => {
    dispatch(deletePostStart());

    axios
        .delete(`http://localhost:4040/posts/${id}`)
        .then(() => {
            dispatch(deletePostSuccess(id));
        })
        .catch(error => {
            dispatch(deletePostError(error));
        });
};

export const addPost = postToAdd => dispatch => {
    dispatch(addPostStart());

    axios
        .post('http://localhost:4040/posts', postToAdd)
        .then(response => {
            dispatch(addPostSuccess(response.data));
        })
        .catch(error => {
            dispatch(addPostError(error));
        });
};

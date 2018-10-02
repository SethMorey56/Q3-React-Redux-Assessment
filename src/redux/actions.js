import axios from 'axios';

export const FETCH_CAMERAS_SUCCESS = 'FETCH_CAMERAS_SUCESS'
export const FETCH_CAMERAS_FAILED = 'FETCH_CAMERAS_FAILED'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const fetchCameras = () => {
    return dispatch => {
        axios.get('http://localhost:8082/api/cameras').then(response => dispatch({
            type: FETCH_CAMERAS_SUCCESS,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: FETCH_CAMERAS_FAILED,
            payload: err
        }))
    }
}

export const addToCart = (id) => {
    return dispatch => {
        axios.patch('http://localhost:8082/api/cameras/' + id + '/add').then(response => dispatch({
            type: ADD_TO_CART,
            payload: response.data
        }))
    }
}

export const removeFromCart = (id) => {
    return dispatch => {
        axios.patch('http://localhost:8082/api/cameras/' + id + '/remove').then(response => dispatch({
            type: REMOVE_FROM_CART,
            payload: response.data
        }))
    }
}
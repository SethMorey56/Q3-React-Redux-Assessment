import { FETCH_CAMERAS_SUCCESS, FETCH_CAMERAS_FAILED, ADD_TO_CART, REMOVE_FROM_CART } from './actions';

let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAMERAS_SUCCESS:
            return action.payload
        case FETCH_CAMERAS_FAILED:
            return action.payload
        case ADD_TO_CART:
            let theSelected = state.filter(camera => camera.id !== action.payload.id)
            let cartState = [...theSelected, action.payload].sort((a, b) => a.id > b.id)
            return cartState
        case REMOVE_FROM_CART:
            let removeFromCart = state.map(camera => camera.id === action.payload.id ? action.payload : camera)
            return removeFromCart
        default:
            return state
    }
}
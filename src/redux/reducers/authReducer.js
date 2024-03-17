import * as types from '../actionTypes/authActionTypes';
const initialState = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case types.LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            }
    
        default:
            return state
    }

}
export default authReducer;
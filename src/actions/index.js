import {
    LOGIN, LOGOUT
} from './types'

export const login_user = (user_info) => {
    return {
        type: LOGIN,
        user_info
    }
}
export const logout_user = (user_info) => {
    return {
        type: LOGOUT,
        user_info
    }
}
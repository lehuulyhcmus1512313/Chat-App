import { combineReducers } from 'redux';
import userProfileReducer from './userprofile';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
    userProfileReducer: userProfileReducer,
    firebase: firebaseReducer
})
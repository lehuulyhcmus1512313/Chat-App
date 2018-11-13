import {createStore, compose } from 'redux';
import rootReducer from '../src/reducers';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from './fire'


const config = {
  userProfile: 'users', 
  enableLogging: false, 
  profileFactory: (userData, profileData) => { 
   
    profileData.isOnline = true;
    profileData.lastSignInTime = new Date().toLocaleString();
    return profileData;
  }
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config)
)(createStore)


export function configureStore(initialState) {
  return createStoreWithFirebase(rootReducer, initialState)
}

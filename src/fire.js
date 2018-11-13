import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDX2wlZtnSBJcsUl13G5tIFPnTjVkOTGlY",
    authDomain: "account-f76eb.firebaseapp.com",
    databaseURL: "https://account-f76eb.firebaseio.com",
    projectId: "account-f76eb",
    storageBucket: "account-f76eb.appspot.com",
    messagingSenderId: "756092532517"
};
var fire = firebase.initializeApp(config);
export default fire;  
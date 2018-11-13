import React, { Component } from 'react';
import '../App.css';
import Login from '../presentationals/Login'
import { withFirebase } from 'react-redux-firebase'

class LoginContainer extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push('/home');
            }
        });
    }
    authenticate = () => {

        this.props.firebase.login({
            provider: 'google',
            type: 'popup',
        }).then(()=>{
        }).catch((err) =>{
            
        })

    }

    render() {
        return (
            <Login authenticate={this.authenticate} />
        );
    }
}
export default withFirebase(LoginContainer);
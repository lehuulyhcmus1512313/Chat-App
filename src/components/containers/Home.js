import React, { Component } from 'react';
import '../../App.css';
import Home from '../presentationals/Home'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
class HomeContainer extends Component {
    SignOut = () => {
        const uid = this.props.auth.uid
        this.props.firebase.logout().then(() => {
            this.props.firebase.update('users/' + uid, {
                isOnline: false,
                lastSignInTime: new Date().toString()
            })
            this.props.history.push('/login')
        }).catch(function (error) {
        });

    }
    componentDidMount() {
       
        const uid = this.props.auth.uid
        this.props.firebase.auth().onAuthStateChanged((user) => {
            if (user && typeof uid != "undefined") {
                this.props.firebase.update('users/' + uid, {
                    isOnline: true,
                    lastSignInTime: new Date().toString()
                })
            } else {
                this.props.history.push('/login');
            }
        });

        window.addEventListener("beforeunload", (ev) => {
            if (this.props.profile || typeof this.props.auth.uid !== "undefined") {
                this.props.firebase.update('users/' + this.props.auth.uid, {
                    isOnline: false,
                    lastSignInTime: new Date().toString()
                })
            }
        });
    }
    render() {
        return (
            <Home SignOut={this.SignOut} listUser={this.props.users} profile={this.props.profile} auth={this.props.auth} />
        );
    }
}




export default compose(
    firebaseConnect((props) => [
        { path: 'users' } 
    ]),
    connect((state, props) => ({
        users: state.firebase.data.users,
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }))
)(withRouter(HomeContainer));

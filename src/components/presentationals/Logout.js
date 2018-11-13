import React, { Component } from 'react';
import '../../css/LogoutButton.css';
import { connect } from 'react-redux'
import { compose } from 'redux'

class LoginButton extends Component {
    render(){
        return(
            <div className="navigation" onClick={this.props.logoutClick}>
                <span className="btnLogout">
                    <img src={this.props.profile.avatarUrl} alt="avatar"/>
                    <div className="logout">LOGOUT</div>
                </span>
            </div>
        )
    }
}

export default compose(
    connect((state, props) => ({
        profile: state.firebase.profile
    }))
)(LoginButton);
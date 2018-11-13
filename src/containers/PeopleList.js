import React, { Component } from 'react';
import '../css/LogoutButton.css';

class PeopleListContainer extends Component {
    render() {
        return (
            <div className="peoplelist" id="peoplelist">
                <div className="search">
                    <input type="text" placeholder="search" />
                    <i className="fa fa-search"></i>
                </div>
            </div>
        )
    }
}


export default (PeopleListContainer);
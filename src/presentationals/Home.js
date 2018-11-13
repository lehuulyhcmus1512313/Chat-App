import React, { Component } from 'react';
import '../css/Home.css';
import LogoutButton from './Logout'
import _ from 'lodash';
class Home extends Component {
    renderPeopleList = () => {
        const Peoples = [];
        var key = 0;
        _.map(this.props.listUser, (value, uid) => {
            if (uid !== this.props.auth.uid && uid !== 'undefined') {
                var User;
                var Icon;
                if (value.isOnline === false) {
                    const last= new Date(value.lastSignInTime);
                    const curr = new Date();
                    var s = Math.floor((curr - (last)) / 1000);
                    var m = Math.floor(s / 60);
                    var h = Math.floor(m / 60);
                    var d = Math.floor(h / 24);

                    h = h - (d * 24);
                    m = m - (d * 24 * 60) - (h * 60);
                    s = s - (d * 24 * 60 * 60) - (h * 60 * 60) - (m * 60);

                    if (d === 0)
                        if (h === 0)
                            if (m === 0 || m === 1)
                                User = '1 minute ago' 
                            else
                                User =  m + ' minutes ago' 
                        else
                            if (h === 1)
                                User = '1 hour ago' 
                            else
                                User =  h + ' hours ago' 
                    else
                        if (d === 1)
                            User = '1 day ago' 
                        else
                            User =  + d + ' days ago' 

                    Icon = "fa fa-circle offline";
                }
                else {
                    User = 'online';
                    Icon = "fa fa-circle online";
                }
                Peoples.push(
                    <li onClick={() => this.click(uid)} className="peopleitem" key={key++}>
                        <div className="split right">
                            <div className="name">{value.displayName}</div>
                        </div>
                    </li>)
            }
        })
        return Peoples;
    }
    render() {
        return (
            <div>
                <LogoutButton logoutClick={this.props.SignOut}></LogoutButton>
                <div className="container clearfix">
                    <div className="peoplelist" id="peoplelist">
                        <div className="search">
                            <input type="text" placeholder="search" />
                            <i className="fa fa-search"></i>
                        </div>
                        <ul className="list">
                            {this.renderPeopleList()}                            
                        </ul>
                    </div>
                    <div className="chat">
                        <div className="chat-header clearfix">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
                            <div className="chat-about">
                                <div className="chat-with">Chat with Vincent Porter</div>
                            </div>
                            <i className="fa fa-star"></i>
                        </div>
                        {/* <!-- end chat-header --> */}
                        <div className="chat-history">
                            <ul>
                                <li className="clearfix">
                                    <div className="message-data align-right">
                                        <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                                        <span className="message-data-name" >Olia</span>
                                        <i className="fa fa-circle me"></i>
                                    </div>
                                    <div className="message other-message float-right">
                                        Hi Vincent, how are you? How is the project coming along?
                                    </div>
                                </li>
                                <li>
                                    <div className="message-data">
                                        <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                                        <span className="message-data-time">10:12 AM, Today</span>
                                    </div>
                                    <div className="message my-message">
                                        Are we meeting today? Project has been already finished and I have results to show you.
                                    </div>
                                </li>
                                <li>
                                    <div className="message-data">
                                        <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                                        <span className="message-data-time">10:12 AM, Today</span>
                                    </div>
                                    <div className="message my-message">
                                        Are we meeting today? Project has been already finished and I have results to show you.
                                    </div>
                                </li>
                                <li>
                                    <div className="message-data">
                                        <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                                        <span className="message-data-time">10:12 AM, Today</span>
                                    </div>
                                    <div className="message my-message">
                                        Are we meeting today? Project has been already finished and I have results to show you.
                                    </div>
                                </li>
                                <li>
                                    <div className="message-data">
                                        <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
                                        <span className="message-data-time">10:12 AM, Today</span>
                                    </div>
                                    <div className="message my-message">
                                        Are we meeting today? Project has been already finished and I have results to show you.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="chat-message clearfix">
                            <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>
                            <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                            <i className="fa fa-file-image-o"></i>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Home);
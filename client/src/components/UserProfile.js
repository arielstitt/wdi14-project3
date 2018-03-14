import React, { Component } from 'react';
import EditUser from './EditUser'


class UserProfile extends Component {
    render() {
        return (
            <div>
                Hi from UserProfile
                <a href="/users/:userId/edit">edit page</a> <br/>
                <a href="/users/">users</a>

            </div>
        );
    }
}

export default UserProfile;
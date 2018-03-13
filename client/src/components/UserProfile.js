import React, { Component } from 'react';
import EditUser from './EditUser'


class UserProfile extends Component {
    render() {
        return (
            <div>
                Hi from UserProfile
                <a href="/users/1/edit">edit page</a>
            </div>
        );
    }
}

export default UserProfile;
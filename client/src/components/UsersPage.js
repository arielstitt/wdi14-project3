import React, { Component } from 'react';

class UsersPage extends Component {
    state = {
        users: []
    }
    
    render() {
        return (
            <div>
                Hi from the user UsersPage
                <a href="/users/1">UserProfile</a>
                
            </div>
        );
    }
}

export default UsersPage;
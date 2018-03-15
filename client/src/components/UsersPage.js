import React, { Component } from 'react';
import { UserImage } from './styled-components/images'
import { Link } from "react-router-dom";
import axios from 'axios'


class UsersPage extends Component {


    render() {
        console.log(this.props.users)
        const usersList = this.props.users.map(user => {
            return (
                <div key={user._userId}>
                    <Link to={`/users/${user._id}`}>
                        <UserImage src={user.imgUrl} alt="" /> <br />
                        {user.name} <br />
                        {user.userInfo}
                    </Link>
                    <div>
                        <button onClick={() => this.props.remove(user._id)}>Delete</button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                Hi from the user UsersPage
                <a href="/users/">UserProfile</a>
                <br />
                <a href="/">Create New User</a>
                {usersList}

            </div>
        );
    }
}

export default UsersPage;
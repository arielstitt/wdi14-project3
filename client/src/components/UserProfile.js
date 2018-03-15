import React, { Component } from 'react';
import EditUser from './EditUser'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { UserImage } from './styled-components/images'


class UserProfile extends Component {
    state = {
        user: {
            goals: []
        },
        redirect: false,
    };

    componentDidMount = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`)
            .then((response) => {
                const user = response.data
                this.setState({ user })
            })

    }

    render() {
        return (
            <div>
                <h1>Hi from UserProfile</h1>
                <Link to={`/users/${this.state.user._id}/edit`}>edit page</Link> <br />
                <a href="/users">users</a>
                <div>
                    <UserImage src={this.state.user.imgUrl} alt="" />
                </div>
                {this.state.user._id}
                <div>
                   <h3>{this.state.user.userInfo}</h3> 
                </div>

            </div>
        );
    }
}

export default UserProfile;
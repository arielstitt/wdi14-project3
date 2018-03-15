import React, { Component } from 'react';
import EditUser from './EditUser'
import { Redirect } from 'react-router'
import axios from 'axios'
import {UserImage} from './styled-components/images'


class UserProfile extends Component {
    state = {
        user: {
          goals: []
        },
        redirect: false,
      };

      componentDidMount() {
          const userId = this.props.match.params.userId
          axios.get(`/api/users/${userId}`)
          .then((response) =>{
             const user = response.data
          this.setState({ user }) 
          })
          
      }

    render() {
        return (
            <div>
                Hi from UserProfile
                <a href="/users/:userId/edit">edit page</a> <br/>
                <a href="/users">users</a>
                <UserImage src={this.state.user.imgUrl} alt=""/>
            </div>
        );
    }
}

export default UserProfile;
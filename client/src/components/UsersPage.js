import React, { Component } from 'react';
import {UserImage} from './styled-components/images'

class UsersPage extends Component {
    
    render() {
        console.log(this.props.users)
        const usersList = this.props.users.map((user, index)=>{
            return(
            <div key={index}>
                {user.name}
               <UserImage src={user.imgUrl} alt=""/>
            </div>
        )
        })
        return (
            <div>
                Hi from the user UsersPage
                <a href="/users/1">UserProfile</a>
                {usersList}
                { 1 + 2 }
            </div>
        );
    }
}

export default UsersPage;
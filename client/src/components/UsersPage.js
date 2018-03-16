import React, { Component } from 'react';
import { UserImage } from './styled-components/images'
import { Link } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'

const NavBar = styled.nav`
height: 10vh;
border: slategray solid;
display:flex;
justify-content: space-between;
background: #535e69;
`
const Button = styled.button`
background-color: red;
    color: black;
    border: 2px solid #555555;
    padding: 1em;
`
const UserList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`
const UserInfo = styled.div`
border: black solid 1px;
padding: 1em;
margin: 10px;
`

const UserProfile = styled.div`
padding: 1em;
width: 30vw;
`

class UsersPage extends Component {


    render() {
        console.log(this.props.users)
        const usersList = this.props.users.map(user => {
            return (
                <UserProfile key={user._userId}>
                    <Link to={`/users/${user._id}`}>
                        <UserImage src={user.imgUrl} alt="" /> <br />
                    </Link>
                    <UserInfo>
                        <h1>{user.name} </h1>
                        {user.userInfo}
                    </UserInfo>
                    <div>
                        <Button onClick={() => this.props.remove(user._id)}>Delete</Button>
                    </div>
                </UserProfile>
            )
        })
        return (
            <div>
                <NavBar>
                    <div><a href="/users/">UserProfile</a></div>
                    <div><a href="/">Create New User</a></div>
                </NavBar>
                <UserList>
                    {usersList}
                </UserList>


            </div>
        );
    }
}

export default UsersPage;
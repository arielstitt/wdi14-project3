import React, { Component } from 'react';
import EditUser from './EditUser'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { UserImage } from './styled-components/images'
import styled from 'styled-components'


const NavBar = styled.nav`
height: 10vh;
border: slategray solid;
display:flex;
justify-content: space-between;
background: #535e69;
`
const Profile = styled.div`
display: flex;
justify-content: space-around;
`

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
                <NavBar>
                    <Link to={`/users/${this.state.user._id}/edit`}>edit page</Link> <br />
                    <a href="/users">users</a>
                </NavBar>

                <Profile className="wrapper">
                    <div className="top-half">
                        <UserImage src={this.state.user.imgUrl} alt="" />
                    </div>
                    <div className="topHalf">
                        <h3>{this.state.user.userInfo}</h3>
                    </div>
                </Profile>
                <hr />
            </div>
        );
    }
}

export default UserProfile;
import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
height: 10vh;
border: slategray solid;
display:flex;
justify-content: flex-end;
background: #535e69;
`
const FormDiv = styled.div`
height: 60vh;
width: 41vw;
background-color: #f1f0f0;
border-radius: 10%;
padding: 10px;
margin-top: 4em;
border: #bdbcc3 solid 1px;
display: flex;
justify-content: space-evenly;
align-items: center;
`

class EditUser extends Component {
    state = {
        editUser: {
            name: '',
            imgUrl: '',
            userInfo: ''
        },
        redirect: false
    }

    updateUser = (event) => {
        const userId = this.props.match.params.userId
        axios.patch(`/api/users/${userId}`, this.state.editUser)
            .then(response => {
                this.setState({ user: response.data, redirect: true })
            })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        this.updateUser()
        const userId = this.props.match.params.userId
    }

    handleChange = (event) => {
        event.preventDefault()
        const attribute = event.target.name
        const value = event.target.value
        const editUser = { ...this.state.editUser }
        editUser[attribute] = value
        this.setState({ editUser })
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={`/users/${this.props.match.params.userId}`} />
        }
        return (
            <div>
<NavBar>
<a href="/users">Back to Profile Page</a>
</NavBar>
                HELLO
                <FormDiv>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            name="name"
                            placeholder="name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="imgUrl"
                            placeholder="image"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="userInfo"
                            placeholder="description"
                            onChange={this.handleChange}
                        />
                    </div>


                    <button type="submit">redirect to user profile
                    </button>

                </form>

            </FormDiv>
            </div>
        );
    }
}

export default EditUser;
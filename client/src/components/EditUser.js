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
const Background = styled.div`
height: 100vh;
width: 100vw;
background-image: url('https://images.unsplash.com/photo-1485897790417-5bbfe0e37428?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=25aca667c0ff9b8a65f975a926b50c9a&auto=format&fit=crop&w=1500&q=80');
background-size: cover;
`
const Input = styled.input`
width: 38vw;
    height: 4vh;
    margin: 10px;
`
const Button = styled.button`
background-color: white;
    color: black;
    border: 2px solid #555555;
    padding: 1em;
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
    handleSubmit = (event) => {
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
            <Background>
                <NavBar>
                </NavBar>
                
                <FormDiv>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <Input
                                name="name"
                                placeholder="name"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <Input
                                name="imgUrl"
                                placeholder="image"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <Input
                                name="userInfo"
                                placeholder="description"
                                onChange={this.handleChange}
                            />
                        </div>


                        <Button type="submit">redirect to user profile
                    </Button>

                    </form>

                </FormDiv>
            </Background>
        );
    }
}

export default EditUser;
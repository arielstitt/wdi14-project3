import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Background = styled.div`
height: 100vh;
width: 100vw;
background-image: url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b1c8aaccdc1a980f26c60016117fc60&auto=format&fit=crop&w=1349&q=80');
`

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

class HomePage extends Component {
    state = {
        newUser: {},
        redirectToUsers: ''
    }
    createUser = () => {
        axios.post('/api/users', this.state.newUser)
            .then(response => { this.props.getUsers() })
            .catch((err) => {
                console.log(err)
            })
    }

    createUser = () => {
        axios.post('/api/users', this.state.newUser).then((res) => {
            const newUserId = res.data[res.data.length - 1]
            { this.props.getUsers() }
            this.setState({ redirectToUsers: newUserId })
        })
    }

    handleChange = (event) => {
        event.preventDefault()
        const attribute = event.target.name
        const value = event.target.value
        const newUser = { ...this.state.newUser }
        newUser[attribute] = value
        this.setState({ newUser })
    }
    handleSubmit = (event) => {
        this.createUser()
        event.preventDefault()
        const newUser = { ...this.state.newUser }
        this.setState({ newUser })
    }

    componentWillMount() {
    }

    render() {
        if (this.state.redirectToUsers !== '') {
            return <Redirect to={`/users`} />
        }
        return (
            <Background>
                <NavBar>
                    <a href="/users">UserPage</a>
                </NavBar>                    

                <FormDiv>
                    <form onSubmit={this.handleSubmit}>
                        <h3>New User? Sign up Here!</h3>
                        <div className="Background-img">
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


                        <Button type="submit">Create User Profile
                    </Button>

                    </form>
                </FormDiv>
            </Background>
        );
    }
}

export default HomePage;
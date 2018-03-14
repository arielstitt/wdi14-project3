import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

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
        //the target.name is the key in the key-value pair in your object
        // for instance, our user object has 'name', 'imgUrl', and 'userInfo' keys
        //and the value of those keys will be determined by the user input
        const attribute = event.target.name
        //the value is whatever the user types in 
        const value = event.target.value
        //this step makes a copy of the state and saves it to the variable newUser
        const newUser = { ...this.state.newUser }
        newUser[attribute] = value
        this.setState({ newUser })
    }
    handleSubmit = (event) => {
        this.createUser()
        //prevents the page from autpmatically refreshing
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
            <div>
                Hello from the Home HomePage
                <a href="/users">UserPage</a>
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


                    <button type="submit">redirect to all users
                        {/* <a href="/users">Submit</a> */}
                    </button>

                </form>

            </div>
        );
    }
}

export default HomePage;
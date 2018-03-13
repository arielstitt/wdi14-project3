import React, { Component } from 'react';
import axios from 'axios'
class HomePage extends Component {
    state = {
        users: [],
        newUser: {
            name: "",
            imgUrl: "",
            userInfo: "",
        }
    }
    getUser = () => {
        axios.get('/api/users')
            .then(response => {
                const users = response.data
                this.setState({ users })
            })
    }

    createUser = () => {
        axios.post('/api/users').then(response => {   
            const newUser = response.data
            console.log('created new user',newUser)
            this.setState({ newUser })
        })
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const value = event.target.value
        const newUser = { ...this.state.newUser }
        newUser[attribute] = value
        this.setState({ newUser })
    }
handleSubmit = (event)=>{
    this.createUser()
    //prevents the page from autpmatically refreshing
    event.preventDefault()
    this.setState({})

}
    componentWillMount() {
        this.getUser()
    }

    render() {

        return (
            <div>
                Hello from the Home HomePage
                <a href="/users">UserPage</a>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            name="name"
                            placeholder="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="imgUrl"
                            placeholder="image"
                            value={this.state.imgUrl}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="userInfo"
                            placeholder="description"
                            value={this.state.userInfo}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <button type="submit">
                        Submit
                    </button>
                </form>

            </div>
        );
    }
}

export default HomePage;
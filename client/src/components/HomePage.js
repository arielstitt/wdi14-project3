import React, { Component } from 'react';
import axios from 'axios'
class HomePage extends Component {
    state = {
        newUser: {}
    }

    createUser = () => {
        axios.post('/api/users').then(response => {   
            const newUser = response.data
            console.log('created new user',newUser)
            this.setState({ newUser })
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
handleSubmit = (event)=>{
    // this.createUser()
    //prevents the page from autpmatically refreshing
    event.preventDefault()
    const newUser = {...this.state.newUser}
    this.setState({newUser})

}
    componentWillMount() {
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
                    
                    <button type="submit">
                        Submit
                    </button>
                </form>

            </div>
        );
    }
}

export default HomePage;
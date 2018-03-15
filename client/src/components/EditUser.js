import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


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

                HELLO
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

            </div>
        );
    }
}

export default EditUser;
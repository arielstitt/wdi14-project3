import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


class EditUser extends Component {
    state = {
        editUser: {},
        redirectToUser: ''
    }
    componentDidMount = () => {
        //have to set userId the same as what I put in my server.js
        const userId = this.props.match.params.userId
    }
    // We need to get info about the user with this ID
    // Use axios to make a get request
    updateUser = () => {
        axios.patch(`/api/users/${this.props.match.params}`, this.state.editUser)
            .then((response) => {
                this.setState({ editUser: response.data.editUser })
            })
    }





    render() {
        return (
            <div>
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


                    <button type="submit">redirect to user
                    </button>

                </form>
            </div>
        );
    }
}

export default EditUser;
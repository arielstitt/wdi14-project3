import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import UsersPage from './components/UsersPage'
import UserProfile from './components/UserProfile';
import EditUser from './components/EditUser'
import GoalPage from './components/GoalPage';
import axios from 'axios'

class App extends Component {
  state = {
    users: []
  }

  componentWillMount() {
    this.getUsers()
  }


  getUsers = () => {
    axios.get('/api/users')
      .then(response => {
        const users = response.data
        this.setState({ users })
      }).catch((err) => {
        console.log(err)
      })
  }

  remove = async (userId) => {
    //const userId = this.props.match.params.userId

    // const users = {...this.state.users}
    const response =  await axios.delete(`/api/users/${userId}`)
    console.log(response)
        // await this.setState({ users: response.data})
    // .then(res => {})
    // .catch((err) => {
    //   console.log(err)
    // })
  }


 
  render() {
    const UsersPageComponent = () =>
      (<UsersPage
        users={this.state.users}
        remove={this.remove}
      />)
    const HomePageComponent = () => (
      <HomePage getUsers={this.getUsers}/>
    )
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePageComponent} />
            <Route exact path="/users" render={UsersPageComponent} />
            <Route exact path="/users/:userId" component={UserProfile} />
            <Route exact path="/users/:userId/:goalId" component={GoalPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

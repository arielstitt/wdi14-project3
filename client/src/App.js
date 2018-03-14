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
  getUsers = () => {
    axios.get('/api/users')
      .then(response => {
        const users = response.data
        this.setState({ users })
      }).catch((err) => {
        console.log(err)
      })
  }
  componentWillMount() {
    this.getUsers()
    
  }
  render() {
    const UsersPageComponent = () =>
      (<UsersPage
        users={this.state.users}
      />)
    const HomePageComponent = () => (
      <HomePage getUsers={this.getUsers}/>
    )
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePageComponent} />
            <Route exact path="/users" component={UsersPageComponent} />
            <Route exact path="/users/:userId" component={UserProfile} />
            <Route exact path="/users/:userId/:goalId" component={GoalPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

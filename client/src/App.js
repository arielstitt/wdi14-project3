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
  getUser = ()=>{
    axios.get('/api/users')
    .then(response => {
      const users = response.data
      this.setState({ users })
    })
  }
  componentWillMount(){
    this.getUser()
  }


  render() {

    const UserData = ()=> (<HomePage myUsers={this.state.users}/>)
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={UserData} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/users/:userId" component={UserProfile} />
            <Route exact path="/users/:userId/:goalId" component={GoalPage} />
            {/* <Route exact path="/users/:userId/edit/" component={EditUser} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

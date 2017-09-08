import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import ProductPage from '../ProductPage/ProductPage'
import SignupPage from '../SignupPage/SignupPage';
import RecipesPage from '../RecipesPage/RecipesPage';
import MyRecipesPage from '../MyRecipesPage/MyRecipesPage';
import NewRecipePage from '../NewRecipePage/NewRecipePage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
  userService.logout();
  this.setState({user: null});
  }

  // LifeCycle Methods *******
  componentDidMount() {
      let user = userService.getUser();
      this.setState({user});
  }

  render() {
    return ( 
      <div>
        <header className='header-footer'>SNOBAR ICECREAM</header>
        <Router>
          <div> 
            <NavBar user={this.state.user} handleLogout={this.handleLogout} />
          <Switch>
            <Route exact path='/' render={() => 
              <ProductPage
              />
            }/>
            <Route exact path='/signup' render={(props) => 
                  <SignupPage
                    {...props}
                    handleSignup={this.handleSignup}
                  />
              }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>
              <Route exact path='/myrecipes' render={() => (
                  userService.getUser() ?
                <MyRecipesPage />
                :
                <Redirect to='login' />
              )}/>
              <Route exact path='/recipes' render={() => (
                userService.getUser() ?
                  <RecipesPage />
                  :
                  <Redirect to='/login' />
              )}/>
              <Route exact path='/newrecipe' render={(props) => (
                userService.getUser() ?
                  <NewRecipePage history={props.history} />
                  :
                  <Redirect to='/login' />
              )}/>
          </Switch>
          </div>
        </Router>
      </div>
    )
  }
}



export default App;

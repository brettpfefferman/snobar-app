import React, {Component} from 'react';
import './RecipesPage.css';
import NavBar from '../../components/NavBar/NavBar';

class RecipesPage extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }

  //display recipes all users create
  render() {
      return (
          <div className='recipes'>
              <header className="header-footer">Recipes</header>
              <a href='/'>BACK</a><br />
          </div>
      )
  }
}



export default RecipesPage;
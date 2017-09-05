import React, {Component} from 'react';
import './RecipesPage.css';

class RecipesPage extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }

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
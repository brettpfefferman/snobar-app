import React, {Component} from 'react';
import './MyRecipesPage.css';
import NavBar from '../../components/NavBar/NavBar';

class MyRecipesPage extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }

  //CRUD portion referr to discogs app
  render() {
      return (
          <div className='myrecipes'>
              <header className="header-footer">My Recipes</header>
              <a href='/'>BACK</a><br />
          </div>
      )
  }
}



export default MyRecipesPage;
import React, {Component} from 'react';
import Recipe from '../../components/Recipe/Recipe';
import './MyRecipesPage.css';
import {Link} from 'react-router-dom';
import tokenService from '../../utils/tokenService';
import { Button, Card, Row, Col } from 'react-materialize';

class MyRecipesPage extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch('/api/recipes/user', {
      method: 'GET',
      headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
    })
    .then(res => res.json())
    .then(recipes => {
      this.setState({recipes});
    });
  }

  render() {
    return (
      <div>
        <h1>My Recipes</h1>
        {this.state.recipes.map(recipe => 
          <Recipe recipe={recipe}  key={recipe._id}/>
        )}
        <Link to='/newrecipe'>Add Recipe</Link>
      </div>
    );
  }
};


  
export default MyRecipesPage;
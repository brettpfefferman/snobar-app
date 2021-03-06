import React, {Component} from 'react';
import Recipe from '../../components/Recipe/Recipe';
import './RecipesPage.css';
import NavBar from '../../components/NavBar/NavBar';
import tokenService from '../../utils/tokenService';
import {Row, Button} from 'react-materialize'


class RecipesPage extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    fetch('/api/recipes', {
      method: 'GET',
      headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
    })
    .then(res => res.json())
    .then(recipes => {
      this.setState({recipes});
    });
  }

  //display recipes all users create
  render() {
      return (
          <div>
            <h1> Recipes </h1>
            <Row>
              {this.state.recipes.map(recipe => 
                <Recipe recipe={recipe} key={recipe._id} />
              )}
            </Row>
            <Button text-align='center' waves='light' node='a' href="/">Back</Button>
          </div>
      )
  }
}



export default RecipesPage;
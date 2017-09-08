import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';

class MyRecipesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        product: '',
        recipe: ''
    };
  }


  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/recipes', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(() => {
        this.props.history.push('/myrecipes');
    });
  }

  render() {
        return (
            <div>
            <header className="create-recipe">Create Your Recipe:</header>
            <br/>
                <form className="MyRecipesForm">
                    <div className="recipe-form">     
                        <input type="text" className="recipename" placeholder="Name of your recipe" value={this.state.title} onChange={(e) => this.handleChange('title', e)} />   
                    </div>
                        <br />
                    <div className="recipe-form"> 
                          <select value="SnoBar Product" type="text" value={this.state.product} onChange={(e) => this.handleChange('product', e)}>> 
                            <option value="">SnoBar Product</option>
                            <option value="Chocolate">Chocolate</option>
                            <option value="Lime Sherbert">Lime Sherbert</option>
                            <option value="Cherry">Cherry</option>
                            <option value="Pecan Pie">Pecan Pie</option>
                            <option value="Birthday Cake">Birthday Cake</option>
                          </select>
                    </div>
                        <br />
                    <div className="recipe-form">
                          <textarea name="description" placeholder="Ingredients used:" type="text" value={this.state.recipe} onChange={(e) => this.handleChange('recipe', e)}/>
                          
                    </div>         
                    <div className="recipe-form"> 
                        <button className="btn submit-btn-default" onClick={this.handleSubmit}>Submit</button>&nbsp;&nbsp;&nbsp;
                        <Link to='/myrecipes'>Cancel</Link>    
                    </div>
                </form>
            </div>
        );
    }
};


export default MyRecipesForm;
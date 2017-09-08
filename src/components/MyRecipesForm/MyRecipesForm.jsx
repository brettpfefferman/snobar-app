import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import {Card} from 'react-materialize';
import {Button, Row, Input} from 'react-materialize'

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
                <form className="MyRecipesForm" text-align='center'>
                   <Row>
                        <div className="recipe-form">     
                            <Input placeholder="Name of your recipe" s={8} value={this.state.title} onChange={(e) => this.handleChange('title', e)} />   
                        </div>
                    </Row>
                            <br />
                        <div className="recipe-form"> 
                            <Row value= {this.state.product} onChange={(e) => this.handleChange('product', e)}>
                                <Input s={8} type='select' label="Select your SnoBarProduct" defaultValue='Chocolate'>
                                    <option value="Chocolate">Chocolate</option>
                                    <option value="Lime Sherbert">Lime Sherbert</option>
                                    <option value="Cherry">Cherry</option>
                                    <option value="Pecan Pie">Pecan Pie</option>
                                    <option value="Birthday Cake">Birthday Cake</option>
                                </Input>
                            </Row>
                        </div>
                            <br />
                        <div className="recipe-form">
                            <Row>
                            <Input textarea name="description" s={8} placeholder="Ingredients used:" value={this.state.recipe} onChange={(e) => this.handleChange('recipe', e)}/>
                            </Row>
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